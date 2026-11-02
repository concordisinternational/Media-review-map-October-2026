var wms_layers = [];

var format_cmr_admin3_0 = new ol.format.GeoJSON();
var features_cmr_admin3_0 = format_cmr_admin3_0.readFeatures(json_cmr_admin3_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cmr_admin3_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cmr_admin3_0.addFeatures(features_cmr_admin3_0);
var lyr_cmr_admin3_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cmr_admin3_0, 
                style: style_cmr_admin3_0,
                popuplayertitle: 'cmr_admin3',
                interactive: true,
                title: '<img src="styles/legend/cmr_admin3_0.png" /> cmr_admin3'
            });
var format_caf_admin2_1 = new ol.format.GeoJSON();
var features_caf_admin2_1 = format_caf_admin2_1.readFeatures(json_caf_admin2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caf_admin2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caf_admin2_1.addFeatures(features_caf_admin2_1);
var lyr_caf_admin2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_caf_admin2_1, 
                style: style_caf_admin2_1,
                popuplayertitle: 'caf_admin2',
                interactive: true,
                title: '<img src="styles/legend/caf_admin2_1.png" /> caf_admin2'
            });
var format_tcd_admin2_2 = new ol.format.GeoJSON();
var features_tcd_admin2_2 = format_tcd_admin2_2.readFeatures(json_tcd_admin2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tcd_admin2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tcd_admin2_2.addFeatures(features_tcd_admin2_2);
var lyr_tcd_admin2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tcd_admin2_2, 
                style: style_tcd_admin2_2,
                popuplayertitle: 'tcd_admin2',
                interactive: true,
                title: '<img src="styles/legend/tcd_admin2_2.png" /> tcd_admin2'
            });
var format_ssd_admin3_3 = new ol.format.GeoJSON();
var features_ssd_admin3_3 = format_ssd_admin3_3.readFeatures(json_ssd_admin3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ssd_admin3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ssd_admin3_3.addFeatures(features_ssd_admin3_3);
var lyr_ssd_admin3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ssd_admin3_3, 
                style: style_ssd_admin3_3,
                popuplayertitle: 'ssd_admin3',
                interactive: true,
                title: '<img src="styles/legend/ssd_admin3_3.png" /> ssd_admin3'
            });
var format_sdn_admin2_4 = new ol.format.GeoJSON();
var features_sdn_admin2_4 = format_sdn_admin2_4.readFeatures(json_sdn_admin2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sdn_admin2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sdn_admin2_4.addFeatures(features_sdn_admin2_4);
var lyr_sdn_admin2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sdn_admin2_4, 
                style: style_sdn_admin2_4,
                popuplayertitle: 'sdn_admin2',
                interactive: true,
                title: '<img src="styles/legend/sdn_admin2_4.png" /> sdn_admin2'
            });
var format_MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5 = new ol.format.GeoJSON();
var features_MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5 = format_MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5.readFeatures(json_MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5.addFeatures(features_MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5);
var lyr_MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5, 
                style: style_MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5,
                popuplayertitle: 'Media Review Interactive Map Spreadsheet October 2026(Media Review Interactive Map Sp) (3)',
                interactive: true,
    title: 'Media Review Interactive Map Spreadsheet October 2026(Media Review Interactive Map Sp) (3)<br />\
    <img src="styles/legend/MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5_0.png" /> Environment<br />\
    <img src="styles/legend/MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5_1.png" /> Humanitarian<br />\
    <img src="styles/legend/MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5_2.png" /> Politics & Governance<br />\
    <img src="styles/legend/MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5_3.png" /> Resilience & Extras<br />\
    <img src="styles/legend/MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5_4.png" /> Security<br />\
    <img src="styles/legend/MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5_5.png" /> <br />' });

lyr_cmr_admin3_0.setVisible(true);lyr_caf_admin2_1.setVisible(true);lyr_tcd_admin2_2.setVisible(true);lyr_ssd_admin3_3.setVisible(true);lyr_sdn_admin2_4.setVisible(true);lyr_MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5.setVisible(true);
var layersList = [lyr_cmr_admin3_0,lyr_caf_admin2_1,lyr_tcd_admin2_2,lyr_ssd_admin3_3,lyr_sdn_admin2_4,lyr_MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5];
lyr_cmr_admin3_0.set('fieldAliases', {'adm3_name': 'adm3_name', 'adm3_name1': 'adm3_name1', 'adm3_name2': 'adm3_name2', 'adm3_name3': 'adm3_name3', 'adm3_pcode': 'adm3_pcode', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm3_ref_n': 'adm3_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_caf_admin2_1.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_tcd_admin2_2.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_ssd_admin3_3.set('fieldAliases', {'adm3_name': 'adm3_name', 'adm3_name1': 'adm3_name1', 'adm3_name2': 'adm3_name2', 'adm3_name3': 'adm3_name3', 'adm3_pcode': 'adm3_pcode', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm3_ref_n': 'adm3_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_sdn_admin2_4.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5.set('fieldAliases', {'Title': 'Title', 'Date': 'Date', 'Type': 'Type', 'Link': 'Link', 'Source Name': 'Source Name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_cmr_admin3_0.set('fieldImages', {'adm3_name': '', 'adm3_name1': '', 'adm3_name2': '', 'adm3_name3': '', 'adm3_pcode': '', 'adm2_name': '', 'adm2_name1': '', 'adm2_name2': '', 'adm2_name3': '', 'adm2_pcode': '', 'adm1_name': '', 'adm1_name1': '', 'adm1_name2': '', 'adm1_name3': '', 'adm1_pcode': '', 'adm0_name': '', 'adm0_name1': '', 'adm0_name2': '', 'adm0_name3': '', 'adm0_pcode': '', 'valid_on': '', 'valid_to': '', 'area_sqkm': '', 'version': '', 'lang': '', 'lang1': '', 'lang2': '', 'lang3': '', 'adm3_ref_n': '', 'center_lat': '', 'center_lon': '', });
lyr_caf_admin2_1.set('fieldImages', {'adm2_name': '', 'adm2_name1': '', 'adm2_name2': '', 'adm2_name3': '', 'adm2_pcode': '', 'adm1_name': '', 'adm1_name1': '', 'adm1_name2': '', 'adm1_name3': '', 'adm1_pcode': '', 'adm0_name': '', 'adm0_name1': '', 'adm0_name2': '', 'adm0_name3': '', 'adm0_pcode': '', 'valid_on': '', 'valid_to': '', 'area_sqkm': '', 'version': '', 'lang': '', 'lang1': '', 'lang2': '', 'lang3': '', 'adm2_ref_n': '', 'center_lat': '', 'center_lon': '', });
lyr_tcd_admin2_2.set('fieldImages', {'adm2_name': '', 'adm2_name1': '', 'adm2_name2': '', 'adm2_name3': '', 'adm2_pcode': '', 'adm1_name': '', 'adm1_name1': '', 'adm1_name2': '', 'adm1_name3': '', 'adm1_pcode': '', 'adm0_name': '', 'adm0_name1': '', 'adm0_name2': '', 'adm0_name3': '', 'adm0_pcode': '', 'valid_on': '', 'valid_to': '', 'area_sqkm': '', 'version': '', 'lang': '', 'lang1': '', 'lang2': '', 'lang3': '', 'center_lat': '', 'center_lon': '', });
lyr_ssd_admin3_3.set('fieldImages', {'adm3_name': '', 'adm3_name1': '', 'adm3_name2': '', 'adm3_name3': '', 'adm3_pcode': '', 'adm2_name': '', 'adm2_name1': '', 'adm2_name2': '', 'adm2_name3': '', 'adm2_pcode': '', 'adm1_name': '', 'adm1_name1': '', 'adm1_name2': '', 'adm1_name3': '', 'adm1_pcode': '', 'adm0_name': '', 'adm0_name1': '', 'adm0_name2': '', 'adm0_name3': '', 'adm0_pcode': '', 'valid_on': '', 'valid_to': '', 'area_sqkm': '', 'version': '', 'lang': '', 'lang1': '', 'lang2': '', 'lang3': '', 'adm3_ref_n': '', 'center_lat': '', 'center_lon': '', });
lyr_sdn_admin2_4.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5.set('fieldImages', {'Title': '', 'Date': '', 'Type': '', 'Link': '', 'Source Name': '', 'Location': '', 'Latitude': '', 'Longitude': '', });
lyr_cmr_admin3_0.set('fieldLabels', {'adm3_name': 'no label', 'adm3_name1': 'no label', 'adm3_name2': 'no label', 'adm3_name3': 'no label', 'adm3_pcode': 'no label', 'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm3_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_caf_admin2_1.set('fieldLabels', {'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_tcd_admin2_2.set('fieldLabels', {'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_ssd_admin3_3.set('fieldLabels', {'adm3_name': 'no label', 'adm3_name1': 'no label', 'adm3_name2': 'no label', 'adm3_name3': 'no label', 'adm3_pcode': 'no label', 'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm3_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_sdn_admin2_4.set('fieldLabels', {'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5.set('fieldLabels', {'Title': 'no label', 'Date': 'no label', 'Type': 'no label', 'Link': 'no label', 'Source Name': 'no label', 'Location': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_MediaReviewInteractiveMapSpreadsheetOctober2026MediaReviewInteractiveMapSp3_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});