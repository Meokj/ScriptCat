// ==UserScript==
// @name         Auto Skip YouTube Ads
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
        // 跳过广告按钮
        let skipBtn = document.querySelector('.ytp-ad-skip-button');
        if (skipBtn) {
            skipBtn.click();
        }

        // 如果是广告视频，加速播放
        let video = document.querySelector('video');
        if (document.querySelector('.ad-showing') && video) {
            video.playbackRate = 16;
        }

    }, 1000);
})();
