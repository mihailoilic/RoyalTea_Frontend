export interface ISlideBase {
    imagePath: string;
    htmlContent: string;
}

export interface ISlide extends ISlideBase {
    id: number;
}
