declare module ImageCreator {
 abstract class BaseCreator {
    private imgurClientId;
    protected resultBase64: string;
    private imgurDeleteHash;
    imgurId: string;
    protected abstract getMimeType(): string;
    getImageElement(): HTMLImageElement;
    uploadToImgur(title: string, description: string, onDone: (success: boolean, id: string) => void): void;
    updateImgurDescription(description: string): void;
}
 class PngCreator extends BaseCreator {
    constructor();
    setImage(canvas: HTMLCanvasElement): void;
    protected getMimeType(): string;
}
 class GIFCreator extends BaseCreator {
    private gif;
    constructor(nrWorkers?: number, quality?: number);
    protected getMimeType(): string;
    addFrame(canvas: HTMLCanvasElement, delay: number): void;
    render(onDone: Function): void;
}

}
