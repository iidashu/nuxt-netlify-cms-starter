---
title: ffmpeg で .mp4 を .hls に分割するコマンド
author: david
date: 2016-11-03T00:22:04+00:00
slug: ffmpeg-mp4-hls
published: true
categories:
  - 技術
tags:
  - hls
  - コマンド
  - 備忘録

---
`ffmpeg -i movie1.mp4 -vcodec libx264 -s 1280x720 -strict -2 -b:a 256k -flags +loop-global_header -bsf h264_mp4toannexb -f segment -segment_format mpegts -segment_time 10 -segment_list mav.m3u8 mav_%04d.ts`

なんかエラーが出てるけど作れました

改訂

`ffmpeg -i movie1.mp4 -vcodec libx264 -s 1280x720 -strict experimental -acodec aac -b:a 96k -flags +loop-global_header -vbsf h264_mp4toannexb -f segment -segment_format mpegts -segment_time 10 -segment_list mav.m3u8 mav_%04d.ts`