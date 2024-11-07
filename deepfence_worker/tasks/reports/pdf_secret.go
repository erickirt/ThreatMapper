package reports

import (
	"context"
	"fmt"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"

	"github.com/deepfence/ThreatMapper/deepfence_server/model"
	"github.com/deepfence/ThreatMapper/deepfence_utils/log"
	sdkUtils "github.com/deepfence/ThreatMapper/deepfence_utils/utils"
	"github.com/johnfercher/maroto/v2/pkg/components/page"
	"github.com/johnfercher/maroto/v2/pkg/components/row"
	"github.com/johnfercher/maroto/v2/pkg/components/text"
	"github.com/johnfercher/maroto/v2/pkg/consts/align"
	"github.com/johnfercher/maroto/v2/pkg/consts/border"
	"github.com/johnfercher/maroto/v2/pkg/consts/breakline"
	"github.com/johnfercher/maroto/v2/pkg/consts/fontstyle"
	"github.com/johnfercher/maroto/v2/pkg/core"
	"github.com/johnfercher/maroto/v2/pkg/props"
)

var (
	secretCellStyle = &props.Cell{
		BackgroundColor: &props.Color{Red: 255, Green: 255, Blue: 255},
		BorderType:      border.Full,
		BorderColor:     &props.Color{Red: 0, Green: 0, Blue: 0},
		BorderThickness: 0.1,
	}

	secretResultHeaderProps = props.Text{
		Size:  10,
		Left:  1,
		Top:   1,
		Align: align.Center,
		Style: fontstyle.Bold,
		Color: &props.Color{Red: 0, Green: 0, Blue: 200},
	}
)

func secretPDF(ctx context.Context, params sdkUtils.ReportParams) (string, error) {

	log := log.WithCtx(ctx)

	data, err := getSecretData(ctx, params)
	if err != nil {
		log.Error().Err(err).Msg("failed to get secrets info")
		return "", err
	}

	log.Info().Msgf("report id %s has %d records",
		params.ReportID, data.NodeWiseData.RecordCount)

	if !params.ZippedReport {
		return createSecretSingleFile(data, params)
	}
	return createSecretZippedFile(data, params)
}

func createSecretSingleFile(data *Info[model.Secret], params sdkUtils.ReportParams) (string, error) {
	// get new instance of marato
	m := getMarato()

	// applied filter page
	filtersPage := getFiltersPage(
		data.Title,
		data.ScanType,
		data.AppliedFilters.NodeType,
		fmt.Sprintf("%s - %s", data.StartTime, data.EndTime),
		strings.Join(data.AppliedFilters.SeverityOrCheckType, ","),
		data.AppliedFilters.AdvancedReportFilters.String(),
	)

	// summary table
	summaryPage := getSummaryPage(&data.NodeWiseData.SeverityCount)

	// page per scan
	resultPages := []core.Page{}
	for i, d := range data.NodeWiseData.ScanData {

		// skip if there are no results
		if len(d.ScanResults) == 0 {
			continue
		}

		p := page.New()
		addSecretResultHeaders(p, i)
		p.Add(getSecretResultRows(d)...)
		resultPages = append(resultPages, p)
	}

	// add all pages
	m.AddPages(filtersPage)
	m.AddPages(summaryPage)
	m.AddPages(resultPages...)

	doc, err := m.Generate()
	if err != nil {
		return "", err
	}

	log.Info().Msgf("report id %s pdf generation metrics %s",
		params.ReportID, doc.GetReport())

	return writeReportToFile(os.TempDir(), tempReportFile(params), doc.GetBytes())
}

func createSecretZippedFile(data *Info[model.Secret], params sdkUtils.ReportParams) (string, error) {

	// tmp dir to save generated reports
	tmpDir := filepath.Join(
		os.TempDir(),
		fmt.Sprintf("%d", time.Now().UnixMilli())+"-"+params.ReportID,
	)
	defer os.RemoveAll(tmpDir)

	for i, d := range data.NodeWiseData.ScanData {
		// get new instance of marato
		m := getMarato()

		// applied filter page
		filtersPage := getFiltersPage(
			data.Title,
			data.ScanType,
			data.AppliedFilters.NodeType,
			fmt.Sprintf("%s - %s", data.StartTime, data.EndTime),
			strings.Join(data.AppliedFilters.SeverityOrCheckType, ","),
			data.AppliedFilters.AdvancedReportFilters.String(),
		)

		// summary tableparams sdkUtils.ReportParams
		singleSummary := map[string]map[string]int32{
			i: data.NodeWiseData.SeverityCount[i],
		}
		summaryPage := getSummaryPage(&singleSummary)

		// skip if there are no results
		if len(d.ScanResults) == 0 {
			continue
		}

		resultPage := page.New()
		addSecretResultHeaders(resultPage, i)
		resultPage.Add(getSecretResultRows(d)...)

		// add all pages
		m.AddPages(filtersPage)
		m.AddPages(summaryPage)
		m.AddPages(resultPage)

		doc, err := m.Generate()
		if err != nil {
			return "", err
		}

		outputFile := sdkUtils.NodeNameReplacer.Replace(i) +
			fileExt(sdkUtils.ReportType(params.ReportType))

		log.Info().Msgf("report id %s %s pdf generation metrics %s",
			params.ReportID, outputFile, doc.GetReport())

		if _, err := writeReportToFile(tmpDir, outputFile, doc.GetBytes()); err != nil {
			log.Error().Err(err).Msg("failed to write report to file")
		}
	}

	outputZip := reportFileName(params)

	if err := sdkUtils.ZipDir(tmpDir, "reports", outputZip); err != nil {
		return "", err
	}

	return outputZip, nil
}

func addSecretResultHeaders(p core.Page, nodeName string) {
	p.Add(text.NewRow(10, fmt.Sprintf("%s - Scan Details", nodeName), secretResultHeaderProps))
	p.Add(row.New(6).Add(
		text.NewCol(1, "No.", secretResultHeaderProps).WithStyle(secretCellStyle),
		text.NewCol(2, "Rule Name", secretResultHeaderProps).WithStyle(secretCellStyle),
		text.NewCol(3, "File Name", secretResultHeaderProps).WithStyle(secretCellStyle),
		text.NewCol(1, "Severity", secretResultHeaderProps).WithStyle(secretCellStyle),
		text.NewCol(4, "Matched Content", secretResultHeaderProps).WithStyle(secretCellStyle),
	))
}

func getSecretResultRows(d ScanData[model.Secret]) []core.Row {
	resultRows := []core.Row{}
	for k, v := range d.ScanResults {
		resultRows = append(
			resultRows,
			row.New(15).Add(
				text.NewCol(1, strconv.Itoa(k+1),
					props.Text{Size: 10, Top: 1, Align: align.Center}).
					WithStyle(secretCellStyle),
				text.NewCol(2, v.RuleID,
					props.Text{Size: 10, Top: 1, Align: align.Center, BreakLineStrategy: breakline.DashStrategy}).WithStyle(secretCellStyle),
				text.NewCol(3, v.FullFilename,
					props.Text{Size: 10, Left: 1, Top: 1, BreakLineStrategy: breakline.DashStrategy}).
					WithStyle(secretCellStyle),
				text.NewCol(1, v.Level,
					props.Text{Size: 10, Top: 1, Align: align.Center, Style: fontstyle.Bold, Color: colors[v.Level]}).
					WithStyle(secretCellStyle),
				text.NewCol(4, truncateText(v.MatchedContent, 80),
					props.Text{Size: 10, Left: 1, Top: 1, BreakLineStrategy: breakline.DashStrategy}).
					WithStyle(secretCellStyle),
			),
		)
	}
	return resultRows
}
