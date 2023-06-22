export default class Trail {
    constructor() {
        this.arr = [1, 0.9, 0.8, 0.5, 0.2];
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
    }

    init() {
        document.addEventListener("DOMContentLoaded", () => {
            this.start();
        });
    }

    start() {
        this.clearTrails(); 
        window.addEventListener("mousemove", this.mouseMoveHandler, false);
    }

    stop() {
        window.removeEventListener("mousemove", this.mouseMoveHandler, false);
    }

    clearTrails() {
        const trails = document.querySelectorAll(".trail");
        trails.forEach((trail) => {
            document.body.removeChild(trail);
        });
    }

    mouseMoveHandler(e) {
        this.arr.forEach((item) => {
            let x = (1 - item) * 75;

            let trail = document.createElement("div");
            trail.className = "trail";
            trail.style.top =
                e.pageY + Math.round(Math.random() * x - x / 2) + "px";
            trail.style.left =
                e.pageX + Math.round(Math.random() * x - x / 2) + "px";

            document.body.appendChild(trail);

            window.setTimeout(() => {
                document.body.removeChild(trail);
            }, Math.round(Math.random() * item * 600));
        });
    }
}