<template>
  <div>
    <input type="file" id="thefile" accept="audio/*" @change="loadFile" />
    <canvas id="canvas"></canvas>
    <audio id="audio" controls></audio>
  </div>
</template>
<script>
export default {
  name: "AudioVisualiser",
  data() {
    return {
      audio: null,
      canvas: null,
      dataArray: null,
      analyser: null,
      canvasWidth: undefined,
      canvasHeight: undefined,
      bufferLength: null,
      x: 0
    };
  },
  methods: {
    loadFile(e) {
      this.audio = document.getElementById("audio");
      this.audio.src = URL.createObjectURL(e.target.files[0]);
      this.audio.load();
      this.audio.play();
      this.renderPlayer();
    },
    renderPlayer() {
      var context = new AudioContext();
      var src = context.createMediaElementSource(this.audio);
      this.analyser = context.createAnalyser();

      this.canvas = document.getElementById("canvas");
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;

      this.canvasWidth = this.canvas.width;
      this.canvasHeight = this.canvas.height;

      src.connect(this.analyser);
      this.analyser.connect(context.destination);

      this.analyser.fftSize = 256;

      this.bufferLength = this.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(this.bufferLength);
      this.renderFrame();
    },
    renderFrame() {
      var barWidth = (this.canvasWidth / this.bufferLength) * 2.5;
      var barHeight;
      requestAnimationFrame(this.renderFrame);

      this.x = 0;

      this.analyser.getByteFrequencyData(this.dataArray);

      var ctx = this.canvas.getContext("2d");
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

      for (var i = 0; i < this.bufferLength; i++) {
        barHeight = this.dataArray[i];

        var r = barHeight + 25 * (i / this.bufferLength);
        var g = 250 * (i / this.bufferLength);
        var b = 50;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(
          this.x,
          this.canvasHeight - barHeight,
          barWidth,
          barHeight
        );

        this.x += barWidth + 1;
      }
    }
  }
};
</script>

<style scoped lang="scss">
#thefile {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 100;
}

#canvas {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

audio {
  position: fixed;
  left: 10px;
  bottom: 10px;
  width: calc(100% - 20px);
}
</style>
