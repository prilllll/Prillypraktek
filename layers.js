var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleEarthSatelit_1 = new ol.layer.Tile({
            'title': 'Google Earth Satelit',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });
var format_retailgis_2 = new ol.format.GeoJSON();
var features_retailgis_2 = format_retailgis_2.readFeatures(json_retailgis_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_retailgis_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_retailgis_2.addFeatures(features_retailgis_2);
var lyr_retailgis_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_retailgis_2, 
                style: style_retailgis_2,
                interactive: true,
                title: '<img src="styles/legend/retailgis_2.png" /> retailgis'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleEarthSatelit_1.setVisible(true);lyr_retailgis_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleEarthSatelit_1,lyr_retailgis_2];
lyr_retailgis_2.set('fieldAliases', {'id': 'id', 'origin_id': 'origin_id', 'title': 'title', 'label': 'label', 'distance': 'distance', 'categories': 'categories', });
lyr_retailgis_2.set('fieldImages', {'id': '', 'origin_id': '', 'title': '', 'label': '', 'distance': '', 'categories': '', });
lyr_retailgis_2.set('fieldLabels', {'id': 'no label', 'origin_id': 'inline label', 'title': 'no label', 'label': 'no label', 'distance': 'no label', 'categories': 'no label', });
lyr_retailgis_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});