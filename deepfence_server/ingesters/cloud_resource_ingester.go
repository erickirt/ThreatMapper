package ingesters

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/deepfence/golang_deepfence_sdk/utils/directory"
	"github.com/neo4j/neo4j-go-driver/v4/neo4j"
)

type CloudResourceIngester struct {
	driver neo4j.Driver
}

type CloudResource struct {
	AccountID                      string           `json:"account_id"`
	Arn                            string           `json:"arn"`
	BlockPublicAcls                bool             `json:"block_public_acls,omitempty"`
	BlockPublicPolicy              bool             `json:"block_public_policy,omitempty"`
	BucketPolicyIsPublic           bool             `json:"bucket_policy_is_public,omitempty"`
	RestrictPublicBuckets          bool             `json:"restrict_public_buckets,omitempty"`
	ID                             string           `json:"id"`
	IgnorePublicAcls               bool             `json:"ignore_public_acls,omitempty"`
	Name                           string           `json:"name"`
	HostName                       string           `json:"host_name"`
	Region                         string           `json:"region"`
	ResourceID                     string           `json:"resource_id"`
	IsEgress                       bool             `json:"is_egress"`
	InstanceID                     string           `json:"instance_id"`
	NetworkMode                    string           `json:"network_mode,omitempty"`
	Scheme                         string           `json:"scheme,omitempty"`
	DbClusterIdentifier            string           `json:"db_cluster_identifier,omitempty"`
	ServiceName                    string           `json:"service_name,omitempty"`
	TaskDefinitionArn              string           `json:"task_definition_arn,omitempty"`
	VpcID                          string           `json:"vpc_id,omitempty"`
	AllowBlobPublicAccess          string           `json:"allow_blob_public_access,omitempty"`
	PublicAccess                   string           `json:"public_access,omitempty"`
	GroupId                        string           `json:"group_id,omitempty"`
	CidrIpv4                       string           `json:"cidr_ipv4,omitempty"`
	PublicNetworkAccess            string           `json:"public_network_access,omitempty"`
	StorageAccountName             string           `json:"storage_account_name,omitempty"`
	IamInstanceProfileArn          string           `json:"iam_instance_profile_arn,omitempty"`
	IamInstanceProfileId           string           `json:"iam_instance_profile_id,omitempty"`
	PublicIpAddresss               string           `json:"public_ip_addresss"`
	PolicyStd                      *json.RawMessage `json:"policy_std,omitempty"`
	TaskDefinition                 *json.RawMessage `json:"task_definition,omitempty"`
	VpcOptions                     *json.RawMessage `json:"vpc_options,omitempty"`
	Policy                         *json.RawMessage `json:"policy,omitempty"`
	PublicIps                      *json.RawMessage `json:"public_ips,omitempty"`
	NetworkInterfaces              *json.RawMessage `json:"network_interfaces,omitempty"`
	IamPolicy                      *json.RawMessage `json:"iam_policy,omitempty"`
	IpConfiguration                *json.RawMessage `json:"ip_configuration,omitempty"`
	IngressSettings                string           `json:"ingress_settings,omitempty"`
	SecurityGroups                 *json.RawMessage `json:"security_groups,omitempty"`
	VpcSecurityGroups              *json.RawMessage `json:"vpc_security_groups,omitempty"`
	ContainerDefinitions           *json.RawMessage `json:"container_definitions,omitempty"`
	EventNotificationConfiguration *json.RawMessage `json:"event_notification_configuration,omitempty"`
	ResourcesVpcConfig             *json.RawMessage `json:"resource_vpc_config,omitempty"`
	NetworkConfiguration           *json.RawMessage `json:"network_configuration,omitempty"`
	AttachedPolicyArns             *json.RawMessage `json:"attached_policy_arns"`
	CreateDate                     string           `json:"create_date,omitempty"`
	Groups                         *json.RawMessage `json:"groups"`
	InlinePolicies                 *json.RawMessage `json:"inline_policies"`
	Path                           string           `json:"path"`
	UserId                         string           `json:"user_id"`
	AccessLevel                    string           `json:"access_level"`
	Action                         string           `json:"action"`
	Description                    string           `json:"description"`
	Privilege                      string           `json:"privilege"`
}

func NewCloudResourceIngester() Ingester[[]CloudResource] {
	return &CloudResourceIngester{}
}

func (tc *CloudResourceIngester) Ingest(ctx context.Context, cs []CloudResource) error {
	driver, err := directory.Neo4jClient(ctx)
	session, err := driver.Session(neo4j.AccessModeWrite)

	if err != nil {
		return err
	}
	defer session.Close()

	tx, err := session.BeginTransaction()
	if err != nil {
		return err
	}
	defer tx.Close()

	fmt.Println("reached here")

	if _, err = tx.Run("UNWIND $batch as row MERGE (m:CloudResource{node_id:row.arn, resource_type:row.resource_id}) SET m+=row WITH row UNWIND apoc.convert.fromJsonList(row.security_groups) as group WITH group, row WHERE group IS NOT NULL AND  row.resource_id = 'aws_ec2_instance' AND group.GroupId IS NOT NULL MERGE (n:SecurityGroup{node_id:group.GroupId, name:group.GroupName}) MERGE (m:CloudResource{node_id:row.arn, resource_type:row.resource_id}) MERGE (n)-[:SECURED]->(m)", map[string]interface{}{"batch": ResourceToMaps(cs)}); err != nil {
		fmt.Println("reached here err", err)
		return err
	}

	if _, err = tx.Run("UNWIND $batch as row MERGE (m:CloudResource{node_id:row.arn, resource_type:row.resource_id}) SET m+=row WITH row UNWIND apoc.convert.fromJsonList(row.vpc_security_group_ids) as group WITH group, row WHERE group IS NOT NULL AND  row.resource_id = 'aws_lambda_function'  MERGE (n:SecurityGroup{node_id:group}) MERGE (m:CloudResource{node_id:row.arn, resource_type:row.resource_id}) MERGE (n)-[:SECURED]->(m)", map[string]interface{}{"batch": ResourceToMaps(cs)}); err != nil {
		fmt.Println("reached here err", err)
		return err
	}

	return tx.Commit()
}

// TODO: Call somewhere
func (tc *CloudComplianceIngester) LinkNodesWithCloudResources(ctx context.Context) error {
	driver, err := directory.Neo4jClient(ctx)
	session, err := driver.Session(neo4j.AccessModeWrite)

	if err != nil {
		return err
	}
	defer session.Close()

	tx, err := session.BeginTransaction()
	if err != nil {
		return err
	}
	defer tx.Close()

	if _, err = tx.Run("match (n) -[r:IS]-> (m) delete r", map[string]interface{}{}); err != nil {
		return err
	}

	if _, err = tx.Run("match (n:Node) WITH apoc.convert.fromJsonMap(n.cloud_metadata) as map, n WHERE map.label = 'AWS' WITH map.id as id, n match (m:CloudResource) where m.resource_type = 'aws_ec2_instance' and m.instance_id = id MERGE (n) -[:IS]-> (m)", map[string]interface{}{}); err != nil {
		return err
	}

	if _, err = tx.Run("match (n:Node) WITH apoc.convert.fromJsonMap(n.cloud_metadata) as map, n WHERE map.label = 'GCP' WITH map.hostname as hostname, n match (m:CloudResource) where m.resource_type = 'gcp_compute_instance' and m.hostname = hostname MERGE (n) -[:IS]-> (m)", map[string]interface{}{}); err != nil {
		return err
	}

	if _, err = tx.Run("match (n:Node) WITH apoc.convert.fromJsonMap(n.cloud_metadata) as map, n WHERE map.label = 'AZURE' WITH map.vmId as vm, n match (m:CloudResource) where m.resource_type = 'azure_compute_virtual_machine' and m.arn = vm MERGE (n) -[:IS]-> (m)", map[string]interface{}{}); err != nil {
		return err
	}

	return tx.Commit()
}

func ResourceToMaps(ms []CloudResource) []map[string]interface{} {
	res := []map[string]interface{}{}
	for _, v := range ms {
		res = append(res, v.ToMap())
	}
	fmt.Println("check ms size", len(res))
	return res
}

func (c *CloudResource) ToMap() map[string]interface{} {
	out, err := json.Marshal(*c)
	if err != nil {
		fmt.Println("check err", err)
		return nil
	}
	bb := map[string]interface{}{}
	err = json.Unmarshal(out, &bb)
	if err != nil {
		fmt.Println("check err 2", err)
		return nil
	}

	bb = convertStructFieldToJSONString(bb, "task_definition")
	bb = convertStructFieldToJSONString(bb, "vpc_options")
	bb = convertStructFieldToJSONString(bb, "policy")
	bb = convertStructFieldToJSONString(bb, "public_ips")
	bb = convertStructFieldToJSONString(bb, "network_interfaces")
	bb = convertStructFieldToJSONString(bb, "iam_policy")
	bb = convertStructFieldToJSONString(bb, "ip_configuration")
	bb = convertStructFieldToJSONString(bb, "security_groups")
	bb = convertStructFieldToJSONString(bb, "vpc_security_groups")
	bb = convertStructFieldToJSONString(bb, "container_definitions")
	bb = convertStructFieldToJSONString(bb, "event_notification_configuration")
	bb = convertStructFieldToJSONString(bb, "resource_vpc_config")
	bb = convertStructFieldToJSONString(bb, "network_configuration")
	bb = convertStructFieldToJSONString(bb, "policy_std")
	bb = convertStructFieldToJSONString(bb, "attached_policy_arns")
	bb = convertStructFieldToJSONString(bb, "groups")
	bb = convertStructFieldToJSONString(bb, "inline_policies")

	if bb["resource_id"] == "aws_ecs_service" {
		bb["arn"] = bb["service_name"]
	}
	if bb["resource_id"] == "aws_iam_access_key" {
		bb["arn"] = bb["access_key_id"]
	}
	if strings.Contains("azure", bb["resource_id"].(string)) {
		bb["arn"] = bb["name"]
	}
	if strings.Contains("azure", bb["resource_id"].(string)) {
		bb["arn"] = bb["name"]
		if bb["resource_id"].(string) == "azure_compute_virtual_machine" {

			bb["arn"] = bb["vm_id"]
		}
	}

	return bb
}

func (c *CloudResourceIngester) PushToDB(batches ReportIngestionData) error {
	//DUMMY
	return nil
}
