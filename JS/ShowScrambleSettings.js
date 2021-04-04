class ImageColors {
    constructor(U = "#ffffff", D = "#fef200", FR = "#ed1b24", FL = "#26af4d", BR = "#3f47cc", BL = "#ff7f26", background = "#ffffff", lineColor = "#000000") {
        this._U = U;
        this._D = D
        this._FR = FR;
        this._FL = FL;
        this._BR = BR;
        this._BL = BL;
        this._background = background;
        this._lineColor = lineColor;
    }

    U() {
        return this._U;
    }

    D() {
        return this._D;
    }

    FR() {
        return this._FR;
    }

    FL() {
        return this._FL;
    }

    BR() {
        return this._BR;
    }

    BL() {
        return this._BL;
    }

    background() {
        return this._background;
    }

    lineColor() {
        return this._lineColor;
    }
}

class ImageSettings {

    constructor(lineWidth = 3.0, showBottomLayer = true, canvasSize = 1, showTopLayer = true, showFRLayer = true, showFLLayer = true, 
        showBRLayer = true, showBLLayer = true) {
        this._lineWidth = lineWidth;
        this._showBottomLayer = showBottomLayer;
        this._showTopLayer = showTopLayer;
        this._showFRLayer = showFRLayer;
        this._showFLLayer = showFLLayer;
        this._showBRLayer = showBRLayer;
        this._showBLLayer = showBLLayer;
        this._canvasSize = canvasSize;
    }

    lineWidth() {
        return this._lineWidth;
    }

    showBottomLayer() {
        return this._showBottomLayer;
    }

    showTopLayer() {
        return this._showTopLayer;
    }

    showFRLayer() {
        return this._showFRLayer;
    }

    showFLLayer() {
        return this._showFLLayer;
    }

    showBRLayer() {
        return this._showBRLayer;
    }

    showBLLayer() {
        return this._showBLLayer;
    }

    canvasSize() {
        return this._canvasSize;
    }
}