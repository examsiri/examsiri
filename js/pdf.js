    const adobeApiKey = "791f1956c4b84026916b5520638afe1f";
    var pdfPath ="";
    var pdfFileName ="";
 
    const viewerConfig = {
        //embedMode: "IN_LINE"
        //defaultViewMode: "FIT_WIDTH", showLeftHandPanel: false, dockPageControls: false, showDownloadPDF: false, showPrintPDF: false
        //embedMode: "SIZED_CONTAINER",defaultViewMode: "FIT_PAGE",showDownloadPDF: false, showPrintPDF: false, showFullScreen: true
        embedMode: "FULL_WINDOW",
        defaultViewMode: "FIT_WIDTH",
        showDownloadPDF: false,
        showPrintPDF: false,
        showLeftHandPanel: true,
        showAnnotationTools: false,
        dockPageControls: false
    };

    document.addEventListener("adobe_dc_view_sdk.ready", function() {
        loadPdf(pdfPath);
    });

    function loadPdf(pdfPath) {
        window.adobeDCView = new AdobeDC.View({clientId: adobeApiKey, divId: "pdf-view"});
        adobeDCView.previewFile({
            content:{
                location: {url: pdfPath}
            },
            metaData:{
                fileName: fileName
             }
        }, viewerConfig);

        registerCallback(adobeDCView);
    }

    function registerCallback(adobeDCView) {
        const eventOptions = {
            listenOn: [AdobeDC.View.Enum.Events.APP_RENDERING_DONE], 
            enableFilePreviewEvents: true,
            enablePDFAnalytics: true
        };

        adobeDCView.registerCallback(
            AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
            function (event) {
                console.log("event.type ==> " + event.type);
                if (event.type == "APP_RENDERING_DONE") {
                    $('#loading-status').attr("style", "display: none !important");
                    $('#otherViewerButton').show();
                }
            }, eventOptions
        );
    }
 