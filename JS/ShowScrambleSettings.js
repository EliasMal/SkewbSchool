class ImageColors {
    constructor(U = "#ffffff", D = "#fef200", FR = "#ed1b24", FL = "#26af4d", BR = "#3f47cc", BL = "#ff7f26", background = "#ffffff", lineColor = "#000000", hiddenPiece= "#8c929c") {
        this._U = U;
        this._D = D
        this._FR = FR;
        this._FL = FL;
        this._BR = BR;
        this._BL = BL;
        this._background = background;
        this._lineColor = lineColor;
        this._hiddenPiece = hiddenPiece
    }

    get U() {
        return this._U;
    }

    get D() {
        return this._D;
    }

    get FR() {
        return this._FR;
    }

    get FL() {
        return this._FL;
    }

    get BR() {
        return this._BR;
    }

    get BL() {
        return this._BL;
    }

    get background() {
        return this._background;
    }

    get lineColor() {
        return this._lineColor;
    }

    get hiddenPiece() {
        return this._hiddenPiece;
    }

    set U(U) {
        return this._U = U;
    }

    set D(D) {
        return this._D = D;
    }

    set FR(FR) {
        return this._FR = FR;
    }

    set FL(FL) {
        return this._FL = FL;
    }

    set BR(BR) {
        return this._BR = BR;
    }

    set BL(BL) {
        return this._BL = BL;
    }

    set background(background) {
        return this._background = background;
    }

    set lineColor(lineColor) {
        return this._lineColor = lineColor;
    }

    set hiddenPiece(hiddenPiece) {
        return this._hiddenPiece = hiddenPiece;
    }
}

class ImageSettings {

    constructor(lineWidth = 3.0, showBottomLayer = true, canvasSize = 1, hideTopCorners = false, showTopLayer = true, showFRLayer = true, showFLLayer = true, 
        showBRLayer = true, showBLLayer = true, hideUCenter = false, hideFRCenter = false, hideFLCenter = false, hideBRCenter = false, hideBLCenter = false) {
        this._lineWidth = lineWidth;
        this._showBottomLayer = showBottomLayer;
        this._showTopLayer = showTopLayer;
        this._showFRLayer = showFRLayer;
        this._showFLLayer = showFLLayer;
        this._showBRLayer = showBRLayer;
        this._showBLLayer = showBLLayer;
        this._canvasSize = canvasSize;
        this._hideTopCorners = hideTopCorners;
        this._hideUCenter = hideUCenter
        this._hideFRCenter = hideFRCenter
        this._hideFLCenter = hideFLCenter
        this._hideBRCenter = hideBRCenter 
        this._hideBLCenter = hideBLCenter
    }

    get lineWidth() {
        return this._lineWidth;
    }

    get showBottomLayer() {
        return this._showBottomLayer;
    }

    get showTopLayer() {
        return this._showTopLayer;
    }

    get showFRLayer() {
        return this._showFRLayer;
    }

    get showFLLayer() {
        return this._showFLLayer;
    }

    get showBRLayer() {
        return this._showBRLayer;
    }

    get showBLLayer() {
        return this._showBLLayer;
    }

    get canvasSize() {
        return this._canvasSize;
    }

    get hideTopCorners() {
        return this._hideTopCorners
    }

    set lineWidth(lineWidth) {
        return this._lineWidth = lineWidth;
    }

    set showBottomLayer(showBottomLayer) {
        return this._showBottomLayer = showBottomLayer;
    }

    set showTopLayer(showTopLayer) {
        return this._showTopLayer = showTopLayer;
    }

    set showFRLayer(showFRLayer) {
        return this._showFRLayer = showFRLayer;
    }

    set showFLLayer(showFLLayer) {
        return this._showFLLayer = showFLLayer;
    }

    set showBRLayer(showBRLayer) {
        return this._showBRLayer = showBRLayer;
    }

    set showBLLayer(showBLLayer) {
        return this._showBLLayer= showBLLayer;
    }

    set canvasSize(canvasSize) {
        return this._canvasSize = canvasSize;
    }

    set hideTopCorners(hideTopCorners) {
        return this._hideTopCorners = hideTopCorners
    }
}