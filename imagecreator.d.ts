export declare abstract class ImageCreator {
    private imgurClientId;
    protected resultBase64: string;
    private imgurDeleteHash;
    imgurId: string;
    protected abstract getMimeType(): any;
    getImageElement(): HTMLImageElement;
    uploadToImgur(title: string, description: string, onDone: (success: boolean, id: string) => void): void;
    updateImgurDescription(description: any): void;
}
export declare class PngCreator extends ImageCreator {
    constructor();
    setImage(canvas: HTMLCanvasElement): void;
    protected getMimeType(): string;
}
export declare class GIFCreator extends ImageCreator {
    private gif;
    constructor(nrWorkers?: number, quality?: number);
    protected getMimeType(): string;
    addFrame(canvas: HTMLCanvasElement, delay: number): void;
    render(onDone: Function): void;
}
