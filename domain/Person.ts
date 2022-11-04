export default class Person {
    public height: number = 0.0;
    public weight: number = 0.0;
    public imc: number = 0.0;
    public imcDescription: string = "";

    constructor(height: number, weight: number) {
        this.height = height;
        this.weight = weight;
    }
}
