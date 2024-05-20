/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: v2.2.1
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ModelConnection } from './ModelConnection';
import {
    ModelConnectionFromJSON,
    ModelConnectionFromJSONTyped,
    ModelConnectionToJSON,
} from './ModelConnection';
import type { ModelContainer } from './ModelContainer';
import {
    ModelContainerFromJSON,
    ModelContainerFromJSONTyped,
    ModelContainerToJSON,
} from './ModelContainer';
import type { ModelContainerImage } from './ModelContainerImage';
import {
    ModelContainerImageFromJSON,
    ModelContainerImageFromJSONTyped,
    ModelContainerImageToJSON,
} from './ModelContainerImage';
import type { ModelPod } from './ModelPod';
import {
    ModelPodFromJSON,
    ModelPodFromJSONTyped,
    ModelPodToJSON,
} from './ModelPod';
import type { ModelProcess } from './ModelProcess';
import {
    ModelProcessFromJSON,
    ModelProcessFromJSONTyped,
    ModelProcessToJSON,
} from './ModelProcess';

/**
 * 
 * @export
 * @interface ModelHost
 */
export interface ModelHost {
    /**
     * 
     * @type {boolean}
     * @memberof ModelHost
     */
    agent_running: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    availability_zone: string;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    cloud_account_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    cloud_provider: string;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    cloud_region: string;
    /**
     * 
     * @type {number}
     * @memberof ModelHost
     */
    cloud_warn_alarm_count: number;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    compliance_latest_scan_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    compliance_scan_status: string;
    /**
     * 
     * @type {number}
     * @memberof ModelHost
     */
    compliances_count: number;
    /**
     * 
     * @type {Array<ModelContainerImage>}
     * @memberof ModelHost
     */
    container_images: Array<ModelContainerImage> | null;
    /**
     * 
     * @type {Array<ModelContainer>}
     * @memberof ModelHost
     */
    containers: Array<ModelContainer> | null;
    /**
     * 
     * @type {number}
     * @memberof ModelHost
     */
    cpu_max: number;
    /**
     * 
     * @type {number}
     * @memberof ModelHost
     */
    cpu_usage: number;
    /**
     * 
     * @type {number}
     * @memberof ModelHost
     */
    exploitable_malwares_count: number;
    /**
     * 
     * @type {number}
     * @memberof ModelHost
     */
    exploitable_secrets_count: number;
    /**
     * 
     * @type {number}
     * @memberof ModelHost
     */
    exploitable_vulnerabilities_count: number;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    host_name: string;
    /**
     * 
     * @type {Array<ModelConnection>}
     * @memberof ModelHost
     */
    inbound_connections: Array<ModelConnection> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    instance_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    instance_type: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelHost
     */
    is_console_vm: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    kernel_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    kernel_version: string;
    /**
     * 
     * @type {Array<any>}
     * @memberof ModelHost
     */
    local_cidr: Array<any> | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof ModelHost
     */
    local_networks: Array<any> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    malware_latest_scan_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    malware_scan_status: string;
    /**
     * 
     * @type {number}
     * @memberof ModelHost
     */
    malwares_count: number;
    /**
     * 
     * @type {number}
     * @memberof ModelHost
     */
    memory_max: number;
    /**
     * 
     * @type {number}
     * @memberof ModelHost
     */
    memory_usage: number;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    node_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    node_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    os: string;
    /**
     * 
     * @type {Array<ModelConnection>}
     * @memberof ModelHost
     */
    outbound_connections: Array<ModelConnection> | null;
    /**
     * 
     * @type {Array<ModelPod>}
     * @memberof ModelHost
     */
    pods: Array<ModelPod> | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof ModelHost
     */
    private_ip: Array<any> | null;
    /**
     * 
     * @type {Array<ModelProcess>}
     * @memberof ModelHost
     */
    processes: Array<ModelProcess> | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof ModelHost
     */
    public_ip: Array<any> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    resource_group: string;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    secret_latest_scan_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    secret_scan_status: string;
    /**
     * 
     * @type {number}
     * @memberof ModelHost
     */
    secrets_count: number;
    /**
     * 
     * @type {number}
     * @memberof ModelHost
     */
    uptime: number;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    version: string;
    /**
     * 
     * @type {number}
     * @memberof ModelHost
     */
    vulnerabilities_count: number;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    vulnerability_latest_scan_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelHost
     */
    vulnerability_scan_status: string;
    /**
     * 
     * @type {number}
     * @memberof ModelHost
     */
    warn_alarm_count: number;
}

/**
 * Check if a given object implements the ModelHost interface.
 */
export function instanceOfModelHost(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "agent_running" in value;
    isInstance = isInstance && "availability_zone" in value;
    isInstance = isInstance && "cloud_account_id" in value;
    isInstance = isInstance && "cloud_provider" in value;
    isInstance = isInstance && "cloud_region" in value;
    isInstance = isInstance && "cloud_warn_alarm_count" in value;
    isInstance = isInstance && "compliance_latest_scan_id" in value;
    isInstance = isInstance && "compliance_scan_status" in value;
    isInstance = isInstance && "compliances_count" in value;
    isInstance = isInstance && "container_images" in value;
    isInstance = isInstance && "containers" in value;
    isInstance = isInstance && "cpu_max" in value;
    isInstance = isInstance && "cpu_usage" in value;
    isInstance = isInstance && "exploitable_malwares_count" in value;
    isInstance = isInstance && "exploitable_secrets_count" in value;
    isInstance = isInstance && "exploitable_vulnerabilities_count" in value;
    isInstance = isInstance && "host_name" in value;
    isInstance = isInstance && "inbound_connections" in value;
    isInstance = isInstance && "instance_id" in value;
    isInstance = isInstance && "instance_type" in value;
    isInstance = isInstance && "is_console_vm" in value;
    isInstance = isInstance && "kernel_id" in value;
    isInstance = isInstance && "kernel_version" in value;
    isInstance = isInstance && "local_cidr" in value;
    isInstance = isInstance && "local_networks" in value;
    isInstance = isInstance && "malware_latest_scan_id" in value;
    isInstance = isInstance && "malware_scan_status" in value;
    isInstance = isInstance && "malwares_count" in value;
    isInstance = isInstance && "memory_max" in value;
    isInstance = isInstance && "memory_usage" in value;
    isInstance = isInstance && "node_id" in value;
    isInstance = isInstance && "node_name" in value;
    isInstance = isInstance && "os" in value;
    isInstance = isInstance && "outbound_connections" in value;
    isInstance = isInstance && "pods" in value;
    isInstance = isInstance && "private_ip" in value;
    isInstance = isInstance && "processes" in value;
    isInstance = isInstance && "public_ip" in value;
    isInstance = isInstance && "resource_group" in value;
    isInstance = isInstance && "secret_latest_scan_id" in value;
    isInstance = isInstance && "secret_scan_status" in value;
    isInstance = isInstance && "secrets_count" in value;
    isInstance = isInstance && "uptime" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "vulnerabilities_count" in value;
    isInstance = isInstance && "vulnerability_latest_scan_id" in value;
    isInstance = isInstance && "vulnerability_scan_status" in value;
    isInstance = isInstance && "warn_alarm_count" in value;

    return isInstance;
}

export function ModelHostFromJSON(json: any): ModelHost {
    return ModelHostFromJSONTyped(json, false);
}

export function ModelHostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelHost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'agent_running': json['agent_running'],
        'availability_zone': json['availability_zone'],
        'cloud_account_id': json['cloud_account_id'],
        'cloud_provider': json['cloud_provider'],
        'cloud_region': json['cloud_region'],
        'cloud_warn_alarm_count': json['cloud_warn_alarm_count'],
        'compliance_latest_scan_id': json['compliance_latest_scan_id'],
        'compliance_scan_status': json['compliance_scan_status'],
        'compliances_count': json['compliances_count'],
        'container_images': (json['container_images'] === null ? null : (json['container_images'] as Array<any>).map(ModelContainerImageFromJSON)),
        'containers': (json['containers'] === null ? null : (json['containers'] as Array<any>).map(ModelContainerFromJSON)),
        'cpu_max': json['cpu_max'],
        'cpu_usage': json['cpu_usage'],
        'exploitable_malwares_count': json['exploitable_malwares_count'],
        'exploitable_secrets_count': json['exploitable_secrets_count'],
        'exploitable_vulnerabilities_count': json['exploitable_vulnerabilities_count'],
        'host_name': json['host_name'],
        'inbound_connections': (json['inbound_connections'] === null ? null : (json['inbound_connections'] as Array<any>).map(ModelConnectionFromJSON)),
        'instance_id': json['instance_id'],
        'instance_type': json['instance_type'],
        'is_console_vm': json['is_console_vm'],
        'kernel_id': json['kernel_id'],
        'kernel_version': json['kernel_version'],
        'local_cidr': json['local_cidr'],
        'local_networks': json['local_networks'],
        'malware_latest_scan_id': json['malware_latest_scan_id'],
        'malware_scan_status': json['malware_scan_status'],
        'malwares_count': json['malwares_count'],
        'memory_max': json['memory_max'],
        'memory_usage': json['memory_usage'],
        'node_id': json['node_id'],
        'node_name': json['node_name'],
        'os': json['os'],
        'outbound_connections': (json['outbound_connections'] === null ? null : (json['outbound_connections'] as Array<any>).map(ModelConnectionFromJSON)),
        'pods': (json['pods'] === null ? null : (json['pods'] as Array<any>).map(ModelPodFromJSON)),
        'private_ip': json['private_ip'],
        'processes': (json['processes'] === null ? null : (json['processes'] as Array<any>).map(ModelProcessFromJSON)),
        'public_ip': json['public_ip'],
        'resource_group': json['resource_group'],
        'secret_latest_scan_id': json['secret_latest_scan_id'],
        'secret_scan_status': json['secret_scan_status'],
        'secrets_count': json['secrets_count'],
        'uptime': json['uptime'],
        'version': json['version'],
        'vulnerabilities_count': json['vulnerabilities_count'],
        'vulnerability_latest_scan_id': json['vulnerability_latest_scan_id'],
        'vulnerability_scan_status': json['vulnerability_scan_status'],
        'warn_alarm_count': json['warn_alarm_count'],
    };
}

export function ModelHostToJSON(value?: ModelHost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'agent_running': value.agent_running,
        'availability_zone': value.availability_zone,
        'cloud_account_id': value.cloud_account_id,
        'cloud_provider': value.cloud_provider,
        'cloud_region': value.cloud_region,
        'cloud_warn_alarm_count': value.cloud_warn_alarm_count,
        'compliance_latest_scan_id': value.compliance_latest_scan_id,
        'compliance_scan_status': value.compliance_scan_status,
        'compliances_count': value.compliances_count,
        'container_images': (value.container_images === null ? null : (value.container_images as Array<any>).map(ModelContainerImageToJSON)),
        'containers': (value.containers === null ? null : (value.containers as Array<any>).map(ModelContainerToJSON)),
        'cpu_max': value.cpu_max,
        'cpu_usage': value.cpu_usage,
        'exploitable_malwares_count': value.exploitable_malwares_count,
        'exploitable_secrets_count': value.exploitable_secrets_count,
        'exploitable_vulnerabilities_count': value.exploitable_vulnerabilities_count,
        'host_name': value.host_name,
        'inbound_connections': (value.inbound_connections === null ? null : (value.inbound_connections as Array<any>).map(ModelConnectionToJSON)),
        'instance_id': value.instance_id,
        'instance_type': value.instance_type,
        'is_console_vm': value.is_console_vm,
        'kernel_id': value.kernel_id,
        'kernel_version': value.kernel_version,
        'local_cidr': value.local_cidr,
        'local_networks': value.local_networks,
        'malware_latest_scan_id': value.malware_latest_scan_id,
        'malware_scan_status': value.malware_scan_status,
        'malwares_count': value.malwares_count,
        'memory_max': value.memory_max,
        'memory_usage': value.memory_usage,
        'node_id': value.node_id,
        'node_name': value.node_name,
        'os': value.os,
        'outbound_connections': (value.outbound_connections === null ? null : (value.outbound_connections as Array<any>).map(ModelConnectionToJSON)),
        'pods': (value.pods === null ? null : (value.pods as Array<any>).map(ModelPodToJSON)),
        'private_ip': value.private_ip,
        'processes': (value.processes === null ? null : (value.processes as Array<any>).map(ModelProcessToJSON)),
        'public_ip': value.public_ip,
        'resource_group': value.resource_group,
        'secret_latest_scan_id': value.secret_latest_scan_id,
        'secret_scan_status': value.secret_scan_status,
        'secrets_count': value.secrets_count,
        'uptime': value.uptime,
        'version': value.version,
        'vulnerabilities_count': value.vulnerabilities_count,
        'vulnerability_latest_scan_id': value.vulnerability_latest_scan_id,
        'vulnerability_scan_status': value.vulnerability_scan_status,
        'warn_alarm_count': value.warn_alarm_count,
    };
}

