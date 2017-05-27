module.exports = {
    html: () => {
        return `<div class="tp-video-warp">
  <div class="tp-video-main">
    <ul class="tp-rightmenu">
      <li class="tp-copy-warp">
        <textarea rows="1" class="tp-copy-input">复制弹幕</textarea></li>
      <li class="tp-speend-con">播放速度
        <ul class="tp-speend">
          <li>0.5</li>
          <li>0.75</li>
          <li>正常</li>
          <li>1.25</li>
          <li>1.5</li>
          <li>2</li></ul>
      </li>
      <a href="https://github.com/haocity/tdplayer/issues" target="_blank">
        <li>意见反馈</li></a>
      <a href="https://www.haotown.cn/about.html" target="_blank">
        <li>关于作者</li></a>
      <a href="https://github.com/haocity/tdplayer" target="_blank">
        <li>About tdplayer</li></a>
    </ul>
    <div class="video-end">
      <svg t="1493275296747" class="replay" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3488" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100">
        <path d="M48.012564 368.005052 256.007345 368.005052C282.50851 368.005052 303.987849 346.493648 303.987849 319.992484 303.987849 293.459261 282.50851 272.011981 256.007345 272.011981L172.518731 272.011981C247.808645 165.585172 371.698941 95.994406 512.016029 95.994406 741.749327 95.994406 928.004256 282.249339 928.004256 511.981298 928.004256 741.731959 741.749327 927.954828 512.016029 927.954828 282.249335 927.954828 95.994406 741.730625 95.994406 511.981298 95.994406 485.481472 74.513729 464.00213 48.012564 464.00213 21.479342 464.00213 0 485.481472 0 511.981298 0 794.734285 229.213614 1023.981298 512.017367 1023.981298 794.75299 1023.981298 1024 794.734285 1024 511.981298 1024 229.214949 794.751652 0 512.017367 0 340.405743 0 188.81594 84.590769 95.99574 214.213612L95.99574 128.003676C95.99574 101.471785 74.515063 79.991108 48.013903 79.991108 21.480677 79.991108 0.001338 101.471785 0.001338 128.003676L0.001338 319.993822C0 346.493645 21.479339 368.005052 48.012564 368.005052" p-id="3489" fill="#ffffff"></path>
      </svg>
    </div>
    <div class="tdplayer"></div>
    <div class="danmu-warp"></div>
    <div class="tp-oneplay">
      <svg style="width: 200px;height:200px;" class="tp-icon" viewbox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path fill="#fff" d="M836.1152 512 194.2848 886.4v-748.8000000000001L836.1152 512z" /></svg>
    </div>
    <div class="tp-spinner">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
    <div class="tp-video-con">
      <div class="tp-send">
        <div class="tp-logo-small"></div>
        <input type="text" class="tp-text" required="true" placeholder="客官，不来吐槽一下吗?" autocomplete="off" />
        <div class="tp-color">
          <div class="tp-color-bo" style="background-color: rgb(255, 255, 255)"></div>
          <div class="tp-con">
            <div class="tp-place">◀滚动弹幕</div>
            <div class="tp-color-warp"></div>
          </div>
        </div>
        <input class="tp-up" type="submit" value="发送" /></div>
      <div class="tp-control">
        <div style="float:right;">
          <span class="tp-control-alltime" style="padding:0 6px 0 12px">0:00</span>
          <div class="tp-danmu-switch">弹</div>
          <div class="tp-syk">
            <span class="tp-syk-ico">♫</span>
            <input class="tp-syk-range" type="range" name="points" min="0" max="100" value="100" /></div>
          <svg class="video-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="tp-icon" viewbox="0 0 1024 1024" version="1.1" p-id="1427">
            <path d="M971.862 52.538c-10.964-10.992-25.546-17.044-41.056-17.044L429.616 35.494l0 79.362 479.86 0 0 465.288 79.364 0L988.84 93.524C988.84 78.024 982.802 63.46 971.862 52.538z" p-id="1428" />
            <path d="M115.092 429.62 35.728 429.62l0 500.854c0 15.5 6.038 30.066 16.982 40.994 10.966 10.988 25.544 17.04 41.05 17.04l469.182 0 0-79.364L115.092 909.144 115.092 429.62z" p-id="1429" />
            <path d="M127.16 193.578l73.198 73.198-0.034 0.034 40.438 40.44 14.164 14.096 152.616 152.616c8.796 8.796 20.492 13.64 32.932 13.64 12.442 0 24.138-4.846 32.936-13.644 18.158-18.16 18.156-47.708-0.002-65.866l-141.318-141.318 0.094-0.094-40.484-40.486-14.162-13.97L192.812 127.492l146.47 0 0-92L101.16 35.492c-36.392 0-66 29.608-66 66l0 237.972 92 0L127.16 193.578z" p-id="1430" />
            <path d="M896.578 830.358l-73.198-73.198 0.034-0.034-40.44-40.44-14.148-14.084-152.622-152.62c-8.796-8.8-20.496-13.648-32.942-13.648-12.444 0-24.14 4.848-32.94 13.646-18.148 18.156-18.148 47.702 0.004 65.866l141.31 141.306-0.094 0.094 40.492 40.494 14.16 13.974 84.728 84.726-146.734 0 0 92 238.386 0c36.392 0 66-29.608 66-66l0-237.96-92 0L896.574 830.358z" p-id="1431" /></svg>
        </div>
        <div style="float: left;">
          <svg class="tp-control-play tp-icon" viewbox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fff" d="M836.1152 512 194.2848 886.4v-748.8000000000001L836.1152 512z" /></svg>
          <svg class="tp-control-paused tp-icon" style="display:none" viewbox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fff" d="M256.033769 192.014198l127.977743 0 0 639.933741-127.977743 0 0-639.933741ZM639.976 191.982l127.993 0 0 639.966-127.993 0 0-639.966z" /></svg>
          <span class="tp-control-nowtime">0:00</span>
          <span class="tp-control-alltime-phone">/ 0:00</span></div>
        <div class="tp-tranger">
          <div class="tp-tranger-a"></div>
          <div class="tp-tranger-b"></div>
          <div class="tp-tranger-c"></div>
        </div>
      </div>
    </div>
  </div>
</div>
<style class="css" type="text/css"></style>

        `
    }
}