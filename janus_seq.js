var faker = require('faker');

const uuid1 = (Math.random()+'1000000000000000').slice(2, 15+2);
const uuid2 = (Math.random()+'1000000000000000').slice(2, 15+2);

const name1 = faker.name.findName();
const name2 = faker.name.findName();

const ip1 = faker.internet.ip();
const ip2 = faker.internet.ip();

const opq1 = faker.internet.password();
const opq2 = faker.internet.password();

exports.seq = [
{
   "type": 128,
   "timestamp": 1499105773182286,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d829160",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105773192851,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d829160",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 1,
   "timestamp": 1499105773193112,
   "session_id": uuid1,
   "event": {
      "name": "created",
      "transport": {
         "transport": "janus.transport.http",
         "id": "0x55e21d829160"
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105773202862,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d829160",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105773205227,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105773217349,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 2,
   "timestamp": 1499105773221049,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "name": "attached",
      "plugin": "janus.plugin.videoroom",
      "opaque_id": "videoroomtest-"+opq1
   }
},
{
   "type": 128,
   "timestamp": 1499105774604343,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105774617131,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 64,
   "timestamp": 1499105774617244,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "joined",
         "room": 1234,
         "id": 5620321221303244,
         "private_id": 429531305,
         "display": name1
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105774907662,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d871e40",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 8,
   "timestamp": 1499105774917523,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "owner": "remote",
      "jsep": {
         "type": "offer",
         "sdp": "v=0\r\no=- 1046776850498077355 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE audio video\r\na=msid-semantic: WMS hhk590BNCdQ5t7AijIr9uaUDEZXI8BkLFfCB\r\nm=audio 9 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 106 105 13 110 112 113 126\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:PlYX\r\na=ice-pwd:+zfl48OIHXZ4jh9wwM0HCaj5\r\na=fingerprint:sha-256 AB:C4:5D:7C:0A:BC:ED:B2:62:8D:33:1A:84:B2:86:78:17:9C:3F:F8:55:67:4F:3D:C7:4E:E9:8F:63:AC:E4:21\r\na=setup:actpass\r\na=mid:audio\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=sendonly\r\na=rtcp-mux\r\na=rtpmap:111 opus/48000/2\r\na=rtcp-fb:111 transport-cc\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtpmap:103 ISAC/16000\r\na=rtpmap:104 ISAC/32000\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:106 CN/32000\r\na=rtpmap:105 CN/16000\r\na=rtpmap:13 CN/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:112 telephone-event/32000\r\na=rtpmap:113 telephone-event/16000\r\na=rtpmap:126 telephone-event/8000\r\na=ssrc:2962412716 cname:2bv4Ndvkooyc1Pnm\r\na=ssrc:2962412716 msid:hhk590BNCdQ5t7AijIr9uaUDEZXI8BkLFfCB 8c39a03e-8451-4d09-b4f3-c0252598d5ad\r\na=ssrc:2962412716 mslabel:hhk590BNCdQ5t7AijIr9uaUDEZXI8BkLFfCB\r\na=ssrc:2962412716 label:8c39a03e-8451-4d09-b4f3-c0252598d5ad\r\nm=video 9 UDP/TLS/RTP/SAVPF 96 98 100 102 127 97 99 101 125\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:PlYX\r\na=ice-pwd:+zfl48OIHXZ4jh9wwM0HCaj5\r\na=fingerprint:sha-256 AB:C4:5D:7C:0A:BC:ED:B2:62:8D:33:1A:84:B2:86:78:17:9C:3F:F8:55:67:4F:3D:C7:4E:E9:8F:63:AC:E4:21\r\na=setup:actpass\r\na=mid:video\r\na=extmap:2 urn:ietf:params:rtp-hdrext:toffset\r\na=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:4 urn:3gpp:video-orientation\r\na=extmap:5 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\na=sendonly\r\na=rtcp-mux\r\na=rtcp-rsize\r\na=rtpmap:96 VP8/90000\r\na=rtcp-fb:96 ccm fir\r\na=rtcp-fb:96 nack\r\na=rtcp-fb:96 nack pli\r\na=rtcp-fb:96 goog-remb\r\na=rtcp-fb:96 transport-cc\r\na=rtpmap:98 VP9/90000\r\na=rtcp-fb:98 ccm fir\r\na=rtcp-fb:98 nack\r\na=rtcp-fb:98 nack pli\r\na=rtcp-fb:98 goog-remb\r\na=rtcp-fb:98 transport-cc\r\na=rtpmap:100 H264/90000\r\na=rtcp-fb:100 ccm fir\r\na=rtcp-fb:100 nack\r\na=rtcp-fb:100 nack pli\r\na=rtcp-fb:100 goog-remb\r\na=rtcp-fb:100 transport-cc\r\na=fmtp:100 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f\r\na=rtpmap:102 red/90000\r\na=rtpmap:127 ulpfec/90000\r\na=rtpmap:97 rtx/90000\r\na=fmtp:97 apt=96\r\na=rtpmap:99 rtx/90000\r\na=fmtp:99 apt=98\r\na=rtpmap:101 rtx/90000\r\na=fmtp:101 apt=100\r\na=rtpmap:125 rtx/90000\r\na=fmtp:125 apt=102\r\na=ssrc-group:FID 2539559858 2995613673\r\na=ssrc:2539559858 cname:2bv4Ndvkooyc1Pnm\r\na=ssrc:2539559858 msid:hhk590BNCdQ5t7AijIr9uaUDEZXI8BkLFfCB 77db1f7e-0e56-40e0-ada7-241dec11c991\r\na=ssrc:2539559858 mslabel:hhk590BNCdQ5t7AijIr9uaUDEZXI8BkLFfCB\r\na=ssrc:2539559858 label:77db1f7e-0e56-40e0-ada7-241dec11c991\r\na=ssrc:2995613673 cname:2bv4Ndvkooyc1Pnm\r\na=ssrc:2995613673 msid:hhk590BNCdQ5t7AijIr9uaUDEZXI8BkLFfCB 77db1f7e-0e56-40e0-ada7-241dec11c991\r\na=ssrc:2995613673 mslabel:hhk590BNCdQ5t7AijIr9uaUDEZXI8BkLFfCB\r\na=ssrc:2995613673 label:77db1f7e-0e56-40e0-ada7-241dec11c991\r\n"
      }
   }
},
{
   "type": 64,
   "timestamp": 1499105774919538,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "configured",
         "room": 1234,
         "id": 5620321221303244,
         "audio_active": true,
         "video_active": true,
         "bitrate": 128000
      }
   }
},
{
   "type": 8,
   "timestamp": 1499105774919881,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "owner": "local",
      "jsep": {
         "type": "answer",
         "sdp": "v=0\r\no=- 1499105774919714 1499105774919714 IN IP4 127.0.0.1\r\ns=Demo Room\r\nt=0 0\r\nm=audio 1 RTP/SAVPF 111\r\nc=IN IP4 1.1.1.1\r\na=recvonly\r\na=rtpmap:111 opus/48000/2\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\nm=video 1 RTP/SAVPF 96\r\nc=IN IP4 1.1.1.1\r\na=recvonly\r\na=rtpmap:96 VP8/90000\r\na=rtcp-fb:96 ccm fir\r\na=rtcp-fb:96 nack\r\na=rtcp-fb:96 nack pli\r\na=rtcp-fb:96 goog-remb\r\na=extmap:4 urn:3gpp:video-orientation\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\n"
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105774920129,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105774920586,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "ice": "connecting",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 128,
   "timestamp": 1499105774925826,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4032700",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105774950501,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d867d10",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105774950575,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105774950666,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4037310",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105774969902,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105774970618,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d845cf0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105774971703,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4054cf0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105774985230,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105774985365,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4030a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105775011927,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d82d690",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105775026120,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105775026232,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad402b6b0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105775032278,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d871cf0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105775050016,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d869500",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105775170731,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "selected-pair": "192.168.1.89:52543 [host,udp] <-> 192.168.1.106:62614 [host,udp]",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105775171042,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "dtls": "trying",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105775171063,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "ice": "connected",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105775171161,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "ice": "ready",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 128,
   "timestamp": 1499105775195248,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d867720",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105775234979,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "dtls": "connected",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 64,
   "timestamp": 1499105775235149,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "published",
         "room": 1234,
         "id": 5620321221303244
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105775235162,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "connection": "webrtcup"
   }
},
{
   "type": 32,
   "timestamp": 1499105775249385,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "receiving": true
   }
},
{
   "type": 128,
   "timestamp": 1499105775513441,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d82d530",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 32,
   "timestamp": 1499105775654525,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "receiving": true
   }
},
{
   "type": 128,
   "timestamp": 1499105775731628,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d82d530",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105775948560,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d82d530",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 32,
   "timestamp": 1499105776251153,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 9869,
      "jitter-remote": 0,
      "packets-received": 51,
      "packets-sent": 0,
      "bytes-received": 5161,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105776251172,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 141533916,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 738913,
      "jitter-remote": 0,
      "packets-received": 9,
      "packets-sent": 0,
      "bytes-received": 5996,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105777251425,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 401,
      "jitter-remote": 0,
      "packets-received": 101,
      "packets-sent": 0,
      "bytes-received": 10244,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105777251437,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 141583854,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 387533,
      "jitter-remote": 0,
      "packets-received": 19,
      "packets-sent": 0,
      "bytes-received": 13727,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105778251640,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 21,
      "jitter-remote": 0,
      "packets-received": 150,
      "packets-sent": 0,
      "bytes-received": 15240,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105778251654,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 141660990,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 121292,
      "jitter-remote": 0,
      "packets-received": 37,
      "packets-sent": 0,
      "bytes-received": 26678,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105778998875,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "slow_link": "downlink",
      "nacks_lastsec": 15
   }
},
{
   "type": 32,
   "timestamp": 1499105779499145,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "receiving": false
   }
},
{
   "type": 32,
   "timestamp": 1499105779499156,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 9,
      "lost-by-remote": 0,
      "jitter-local": 36,
      "jitter-remote": 0,
      "packets-received": 158,
      "packets-sent": 0,
      "bytes-received": 16048,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 15
   }
},
{
   "type": 32,
   "timestamp": 1499105779499166,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 141660990,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 121292,
      "jitter-remote": 0,
      "packets-received": 37,
      "packets-sent": 0,
      "bytes-received": 26678,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105779613378,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "receiving": true
   }
},
{
   "type": 128,
   "timestamp": 1499105779613799,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 32,
   "timestamp": 1499105780217077,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "slow_link": "downlink",
      "nacks_lastsec": 71
   }
},
{
   "type": 32,
   "timestamp": 1499105780613256,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 70,
      "lost-by-remote": 0,
      "jitter-local": 31,
      "jitter-remote": 0,
      "packets-received": 180,
      "packets-sent": 0,
      "bytes-received": 18270,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 116
   }
},
{
   "type": 32,
   "timestamp": 1499105780613266,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 141806152,
      "lost": 34,
      "lost-by-remote": 0,
      "jitter-local": 93730,
      "jitter-remote": 0,
      "packets-received": 41,
      "packets-sent": 0,
      "bytes-received": 29833,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 58
   }
},
{
   "type": 128,
   "timestamp": 1499105780613523,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d82d530",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105780639708,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 1,
   "timestamp": 1499105780639781,
   "session_id": uuid2,
   "event": {
      "name": "created",
      "transport": {
         "transport": "janus.transport.http",
         "id": "0x7f0ab8020a80"
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105780661141,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105780661766,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d832900",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105780673311,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d867600",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 2,
   "timestamp": 1499105780673375,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "name": "attached",
      "plugin": "janus.plugin.videoroom",
      "opaque_id": "videoroomtest-"+opq2
   }
},
{
   "type": 128,
   "timestamp": 1499105780856735,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d867600",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105781071600,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d867600",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105781282733,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d867600",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105781495954,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d867600",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105781705153,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d867600",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 32,
   "timestamp": 1499105781856019,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 70,
      "lost-by-remote": 0,
      "jitter-local": 9,
      "jitter-remote": 0,
      "packets-received": 266,
      "packets-sent": 0,
      "bytes-received": 26956,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 139
   }
},
{
   "type": 32,
   "timestamp": 1499105781856033,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 141935455,
      "lost": 34,
      "lost-by-remote": 0,
      "jitter-local": 22672,
      "jitter-remote": 0,
      "packets-received": 67,
      "packets-sent": 0,
      "bytes-received": 48834,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 67
   }
},
{
   "type": 128,
   "timestamp": 1499105782011579,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403e580",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782023852,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403e580",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 64,
   "timestamp": 1499105782023952,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "joined",
         "room": 1234,
         "id": 7468932778387495,
         "private_id": 3264178256,
         "display": name2
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782088866,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 2,
   "timestamp": 1499105782088970,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "name": "attached",
      "plugin": "janus.plugin.videoroom",
      "opaque_id": "videoroomtest-"+opq2
   }
},
{
   "type": 128,
   "timestamp": 1499105782104135,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782123665,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 8,
   "timestamp": 1499105782124852,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "owner": "local",
      "jsep": {
         "type": "offer",
         "sdp": "v=0\r\no=- 1499105774919896 1499105774919895 IN IP4 127.0.0.1\r\ns=Demo Room\r\nt=0 0\r\nm=audio 1 RTP/SAVPF 111\r\nc=IN IP4 1.1.1.1\r\na=sendonly\r\na=rtpmap:111 opus/48000/2\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\nm=video 1 RTP/SAVPF 100\r\nc=IN IP4 1.1.1.1\r\na=sendonly\r\na=rtpmap:100 VP8/90000\r\na=rtcp-fb:100 ccm fir\r\na=rtcp-fb:100 nack\r\na=rtcp-fb:100 nack pli\r\na=rtcp-fb:100 goog-remb\r\na=extmap:4 urn:3gpp:video-orientation\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\n"
      }
   }
},
{
   "type": 64,
   "timestamp": 1499105782124924,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "subscribing",
         "room": 1234,
         "feed": 5620321221303244,
         "private_id": 3264178256
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782174198,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782187265,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403e580",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 8,
   "timestamp": 1499105782188227,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "owner": "remote",
      "jsep": {
         "type": "offer",
         "sdp": "v=0\r\no=- 4463125083512266493 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE audio video\r\na=msid-semantic: WMS HMioksYcEIL76ebLFHn6m8c3jGpWwcBxFNeq\r\nm=audio 9 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 106 105 13 110 112 113 126\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:HtM4\r\na=ice-pwd:BRh3AqohEVrIWi6oKORPqxnb\r\na=fingerprint:sha-256 83:79:50:C5:96:5E:2E:AE:F1:BD:D6:31:C1:88:4D:A2:C8:C8:BD:41:3D:88:D3:61:E9:87:C6:D4:7C:11:A9:A7\r\na=setup:actpass\r\na=mid:audio\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=sendonly\r\na=rtcp-mux\r\na=rtpmap:111 opus/48000/2\r\na=rtcp-fb:111 transport-cc\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtpmap:103 ISAC/16000\r\na=rtpmap:104 ISAC/32000\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:106 CN/32000\r\na=rtpmap:105 CN/16000\r\na=rtpmap:13 CN/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:112 telephone-event/32000\r\na=rtpmap:113 telephone-event/16000\r\na=rtpmap:126 telephone-event/8000\r\na=ssrc:172047677 cname:7y5EPfbbMl+RMj13\r\na=ssrc:172047677 msid:HMioksYcEIL76ebLFHn6m8c3jGpWwcBxFNeq cdfd6338-0c4e-424a-9b88-570c6c60c468\r\na=ssrc:172047677 mslabel:HMioksYcEIL76ebLFHn6m8c3jGpWwcBxFNeq\r\na=ssrc:172047677 label:cdfd6338-0c4e-424a-9b88-570c6c60c468\r\nm=video 9 UDP/TLS/RTP/SAVPF 96 98 100 102 127 97 99 101 125\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:HtM4\r\na=ice-pwd:BRh3AqohEVrIWi6oKORPqxnb\r\na=fingerprint:sha-256 83:79:50:C5:96:5E:2E:AE:F1:BD:D6:31:C1:88:4D:A2:C8:C8:BD:41:3D:88:D3:61:E9:87:C6:D4:7C:11:A9:A7\r\na=setup:actpass\r\na=mid:video\r\na=extmap:2 urn:ietf:params:rtp-hdrext:toffset\r\na=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:4 urn:3gpp:video-orientation\r\na=extmap:5 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\na=sendonly\r\na=rtcp-mux\r\na=rtcp-rsize\r\na=rtpmap:96 VP8/90000\r\na=rtcp-fb:96 ccm fir\r\na=rtcp-fb:96 nack\r\na=rtcp-fb:96 nack pli\r\na=rtcp-fb:96 goog-remb\r\na=rtcp-fb:96 transport-cc\r\na=rtpmap:98 VP9/90000\r\na=rtcp-fb:98 ccm fir\r\na=rtcp-fb:98 nack\r\na=rtcp-fb:98 nack pli\r\na=rtcp-fb:98 goog-remb\r\na=rtcp-fb:98 transport-cc\r\na=rtpmap:100 H264/90000\r\na=rtcp-fb:100 ccm fir\r\na=rtcp-fb:100 nack\r\na=rtcp-fb:100 nack pli\r\na=rtcp-fb:100 goog-remb\r\na=rtcp-fb:100 transport-cc\r\na=fmtp:100 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f\r\na=rtpmap:102 red/90000\r\na=rtpmap:127 ulpfec/90000\r\na=rtpmap:97 rtx/90000\r\na=fmtp:97 apt=96\r\na=rtpmap:99 rtx/90000\r\na=fmtp:99 apt=98\r\na=rtpmap:101 rtx/90000\r\na=fmtp:101 apt=100\r\na=rtpmap:125 rtx/90000\r\na=fmtp:125 apt=102\r\na=ssrc-group:FID 609349048 151253101\r\na=ssrc:609349048 cname:7y5EPfbbMl+RMj13\r\na=ssrc:609349048 msid:HMioksYcEIL76ebLFHn6m8c3jGpWwcBxFNeq d34a49ba-2ae1-47f7-9e0c-c7030b1c04a4\r\na=ssrc:609349048 mslabel:HMioksYcEIL76ebLFHn6m8c3jGpWwcBxFNeq\r\na=ssrc:609349048 label:d34a49ba-2ae1-47f7-9e0c-c7030b1c04a4\r\na=ssrc:151253101 cname:7y5EPfbbMl+RMj13\r\na=ssrc:151253101 msid:HMioksYcEIL76ebLFHn6m8c3jGpWwcBxFNeq d34a49ba-2ae1-47f7-9e0c-c7030b1c04a4\r\na=ssrc:151253101 mslabel:HMioksYcEIL76ebLFHn6m8c3jGpWwcBxFNeq\r\na=ssrc:151253101 label:d34a49ba-2ae1-47f7-9e0c-c7030b1c04a4\r\n"
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782219403,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403e580",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 64,
   "timestamp": 1499105782259365,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "configured",
         "room": 1234,
         "id": 7468932778387495,
         "audio_active": true,
         "video_active": true,
         "bitrate": 128000
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105782260015,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "ice": "connecting",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 8,
   "timestamp": 1499105782264187,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "owner": "local",
      "jsep": {
         "type": "answer",
         "sdp": "v=0\r\no=- 1499105782259536 1499105782259535 IN IP4 127.0.0.1\r\ns=Demo Room\r\nt=0 0\r\nm=audio 1 RTP/SAVPF 111\r\nc=IN IP4 1.1.1.1\r\na=recvonly\r\na=rtpmap:111 opus/48000/2\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\nm=video 1 RTP/SAVPF 96\r\nc=IN IP4 1.1.1.1\r\na=recvonly\r\na=rtpmap:96 VP8/90000\r\na=rtcp-fb:96 ccm fir\r\na=rtcp-fb:96 nack\r\na=rtcp-fb:96 nack pli\r\na=rtcp-fb:96 goog-remb\r\na=extmap:4 urn:3gpp:video-orientation\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\n"
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782277292,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403e580",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782291840,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782307346,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782309507,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403e580",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782316637,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782328817,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403e580",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782338060,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782351366,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403e580",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782373611,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782377782,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403e580",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782398899,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782401730,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403e580",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782412786,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782413200,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403e580",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782424927,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403e580",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782477023,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8020a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782477402,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403e580",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 8,
   "timestamp": 1499105782477741,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "owner": "remote",
      "jsep": {
         "type": "answer",
         "sdp": "v=0\r\no=- 4263735941797954339 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE audio video\r\na=msid-semantic: WMS\r\nm=audio 9 RTP/SAVPF 111\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:ZxMS\r\na=ice-pwd:SeH4Y7XGB3zWZbi//UPRHJcz\r\na=fingerprint:sha-256 15:B3:3A:3A:2C:16:31:E5:F6:D9:0A:5E:91:7B:99:75:10:B1:A3:6F:4F:40:52:E4:73:87:7C:B7:9C:AE:27:48\r\na=setup:active\r\na=mid:audio\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=recvonly\r\na=rtcp-mux\r\na=rtpmap:111 opus/48000/2\r\na=fmtp:111 minptime=10;useinbandfec=1\r\nm=video 9 RTP/SAVPF 100\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:ZxMS\r\na=ice-pwd:SeH4Y7XGB3zWZbi//UPRHJcz\r\na=fingerprint:sha-256 15:B3:3A:3A:2C:16:31:E5:F6:D9:0A:5E:91:7B:99:75:10:B1:A3:6F:4F:40:52:E4:73:87:7C:B7:9C:AE:27:48\r\na=setup:active\r\na=mid:video\r\na=extmap:4 urn:3gpp:video-orientation\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\na=recvonly\r\na=rtcp-mux\r\na=rtpmap:100 VP8/90000\r\na=rtcp-fb:100 ccm fir\r\na=rtcp-fb:100 nack\r\na=rtcp-fb:100 nack pli\r\na=rtcp-fb:100 goog-remb\r\n"
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105782478202,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "ice": "connecting",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105782542741,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "selected-pair": "192.168.1.89:46960 [host,udp] <-> 192.168.1.106:49806 [host,udp]",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 128,
   "timestamp": 1499105782544217,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403e580",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105782545250,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "ice": "connected",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 128,
   "timestamp": 1499105782544844,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8001dd0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105782550369,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "dtls": "trying",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105782551006,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "ice": "connected",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105782551030,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "ice": "ready",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 128,
   "timestamp": 1499105782570838,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4010e60",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782570904,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8001dd0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105782576455,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "ice": "ready",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105782589636,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "dtls": "connected",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 128,
   "timestamp": 1499105782594410,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8001dd0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 64,
   "timestamp": 1499105782594990,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "subscribed",
         "room": 1234,
         "feed": 5620321221303244
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105782595006,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "connection": "webrtcup"
   }
},
{
   "type": 128,
   "timestamp": 1499105782597187,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad402a410",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782625014,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad402a410",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105782815018,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad402a410",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105782973667,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "selected-pair": "192.168.1.89:48164 [host,udp] <-> 192.168.1.106:49799 [host,udp]",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105782974023,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "dtls": "trying",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105782974078,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "ice": "connected",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105782974819,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "ice": "ready",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 128,
   "timestamp": 1499105783023923,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad402a410",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105783027638,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "dtls": "connected",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 64,
   "timestamp": 1499105783030729,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "published",
         "room": 1234,
         "id": 7468932778387495
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105783030793,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "connection": "webrtcup"
   }
},
{
   "type": 32,
   "timestamp": 1499105783048292,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "audio",
      "receiving": true
   }
},
{
   "type": 32,
   "timestamp": 1499105783095395,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 141988080,
      "lost": 70,
      "lost-by-remote": 0,
      "jitter-local": 8,
      "jitter-remote": 0,
      "packets-received": 328,
      "packets-sent": 0,
      "bytes-received": 33218,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 139
   }
},
{
   "type": 32,
   "timestamp": 1499105783095409,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 142003547,
      "lost": 34,
      "lost-by-remote": 0,
      "jitter-local": 9197,
      "jitter-remote": 0,
      "packets-received": 81,
      "packets-sent": 0,
      "bytes-received": 60773,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 67
   }
},
{
   "type": 32,
   "timestamp": 1499105783095721,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "video",
      "receiving": true
   }
},
{
   "type": 128,
   "timestamp": 1499105783150957,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d867600",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105783161320,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d867600",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 2,
   "timestamp": 1499105783161465,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "name": "attached",
      "plugin": "janus.plugin.videoroom",
      "opaque_id": "videoroomtest-"+opq1
   }
},
{
   "type": 128,
   "timestamp": 1499105783174788,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d85c320",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105783195345,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d867600",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 8,
   "timestamp": 1499105783196397,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "owner": "local",
      "jsep": {
         "type": "offer",
         "sdp": "v=0\r\no=- 1499105782264215 1499105782264215 IN IP4 127.0.0.1\r\ns=Demo Room\r\nt=0 0\r\nm=audio 1 RTP/SAVPF 111\r\nc=IN IP4 1.1.1.1\r\na=sendonly\r\na=rtpmap:111 opus/48000/2\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\nm=video 1 RTP/SAVPF 100\r\nc=IN IP4 1.1.1.1\r\na=sendonly\r\na=rtpmap:100 VP8/90000\r\na=rtcp-fb:100 ccm fir\r\na=rtcp-fb:100 nack\r\na=rtcp-fb:100 nack pli\r\na=rtcp-fb:100 goog-remb\r\na=extmap:4 urn:3gpp:video-orientation\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\n"
      }
   }
},
{
   "type": 64,
   "timestamp": 1499105783196411,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "subscribing",
         "room": 1234,
         "feed": 7468932778387495,
         "private_id": 429531305
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105783242157,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d867600",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105783349031,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d867600",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105783418965,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d867600",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 8,
   "timestamp": 1499105783420261,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "owner": "remote",
      "jsep": {
         "type": "answer",
         "sdp": "v=0\r\no=- 5019035585278684336 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE audio video\r\na=msid-semantic: WMS\r\nm=audio 9 RTP/SAVPF 111\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:xX6g\r\na=ice-pwd:IJqLLJUKR5HaVvEqW6ZwjY7H\r\na=fingerprint:sha-256 7C:D5:9F:C6:0B:0B:07:8D:19:E5:68:85:CC:3A:F7:B9:D2:28:83:78:2A:35:11:E4:E2:5E:BE:76:40:B6:17:82\r\na=setup:active\r\na=mid:audio\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=recvonly\r\na=rtcp-mux\r\na=rtpmap:111 opus/48000/2\r\na=fmtp:111 minptime=10;useinbandfec=1\r\nm=video 9 RTP/SAVPF 100\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:xX6g\r\na=ice-pwd:IJqLLJUKR5HaVvEqW6ZwjY7H\r\na=fingerprint:sha-256 7C:D5:9F:C6:0B:0B:07:8D:19:E5:68:85:CC:3A:F7:B9:D2:28:83:78:2A:35:11:E4:E2:5E:BE:76:40:B6:17:82\r\na=setup:active\r\na=mid:video\r\na=extmap:4 urn:3gpp:video-orientation\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\na=recvonly\r\na=rtcp-mux\r\na=rtpmap:100 VP8/90000\r\na=rtcp-fb:100 ccm fir\r\na=rtcp-fb:100 nack\r\na=rtcp-fb:100 nack pli\r\na=rtcp-fb:100 goog-remb\r\n"
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105783446716,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad402a410",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105783446810,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8001050",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105783447199,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad00341e0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105783447352,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "ice": "connecting",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 128,
   "timestamp": 1499105783452307,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d865940",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105783456799,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "selected-pair": "192.168.1.89:38875 [host,udp] <-> 192.168.1.106:49809 [host,udp]",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105783456955,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "dtls": "trying",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105783456980,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "ice": "connected",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 128,
   "timestamp": 1499105783457509,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad00341e0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105783458227,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "ice": "ready",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105783528734,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "dtls": "connected",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 64,
   "timestamp": 1499105783534369,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "subscribed",
         "room": 1234,
         "feed": 7468932778387495
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105783535814,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "connection": "webrtcup"
   }
},
{
   "type": 32,
   "timestamp": 1499105783561898,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 0,
      "packets-received": 0,
      "packets-sent": 48,
      "bytes-received": 0,
      "bytes-sent": 5328,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105783561909,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 5,
      "packets-received": 0,
      "packets-sent": 10,
      "bytes-received": 0,
      "bytes-sent": 6534,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 128,
   "timestamp": 1499105783567689,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad00341e0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105783669923,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad00341e0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105783785505,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad00341e0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105783883358,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad00341e0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105783999178,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d866910",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 32,
   "timestamp": 1499105784034459,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 98001,
      "jitter-remote": 0,
      "packets-received": 50,
      "packets-sent": 0,
      "bytes-received": 5066,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105784034474,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 142047773,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 49213,
      "jitter-remote": 0,
      "packets-received": 13,
      "packets-sent": 0,
      "bytes-received": 8133,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105784095507,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 141988080,
      "lost": 70,
      "lost-by-remote": 0,
      "jitter-local": 7,
      "jitter-remote": 0,
      "packets-received": 377,
      "packets-sent": 0,
      "bytes-received": 38167,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 139
   }
},
{
   "type": 32,
   "timestamp": 1499105784095523,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 142003547,
      "lost": 34,
      "lost-by-remote": 0,
      "jitter-local": 4826,
      "jitter-remote": 0,
      "packets-received": 91,
      "packets-sent": 0,
      "bytes-received": 66873,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 67
   }
},
{
   "type": 32,
   "timestamp": 1499105784492049,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 0,
      "packets-received": 0,
      "packets-sent": 47,
      "bytes-received": 0,
      "bytes-sent": 5242,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105784492077,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 1,
      "packets-received": 0,
      "packets-sent": 9,
      "bytes-received": 0,
      "bytes-sent": 4883,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105784565018,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 0,
      "packets-received": 0,
      "packets-sent": 98,
      "bytes-received": 0,
      "bytes-sent": 10878,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105784565030,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 6,
      "packets-received": 0,
      "packets-sent": 20,
      "bytes-received": 0,
      "bytes-sent": 13633,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105785034687,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 3895,
      "jitter-remote": 0,
      "packets-received": 100,
      "packets-sent": 0,
      "bytes-received": 10196,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105785034699,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 142138343,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 21269,
      "jitter-remote": 0,
      "packets-received": 26,
      "packets-sent": 0,
      "bytes-received": 17892,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105785095704,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 141988080,
      "lost": 70,
      "lost-by-remote": 0,
      "jitter-local": 9,
      "jitter-remote": 0,
      "packets-received": 427,
      "packets-sent": 0,
      "bytes-received": 43217,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 139
   }
},
{
   "type": 32,
   "timestamp": 1499105785095716,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 142140976,
      "lost": 34,
      "lost-by-remote": 0,
      "jitter-local": 2533,
      "jitter-remote": 0,
      "packets-received": 101,
      "packets-sent": 0,
      "bytes-received": 74603,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 67
   }
},
{
   "type": 32,
   "timestamp": 1499105785492539,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 0,
      "packets-received": 0,
      "packets-sent": 98,
      "bytes-received": 0,
      "bytes-sent": 10958,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105785492549,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 4,
      "packets-received": 0,
      "packets-sent": 26,
      "bytes-received": 0,
      "bytes-sent": 17964,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105785567700,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 0,
      "packets-received": 0,
      "packets-sent": 148,
      "bytes-received": 0,
      "bytes-sent": 16428,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105785567715,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 6,
      "packets-received": 0,
      "packets-sent": 31,
      "bytes-received": 0,
      "bytes-sent": 22674,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105786034793,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 142186578,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 151,
      "jitter-remote": 0,
      "packets-received": 151,
      "packets-sent": 0,
      "bytes-received": 15294,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105786034806,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 142183957,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 5860,
      "jitter-remote": 0,
      "packets-received": 46,
      "packets-sent": 0,
      "bytes-received": 33486,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105786270694,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 141988080,
      "lost": 70,
      "lost-by-remote": 0,
      "jitter-local": 7,
      "jitter-remote": 0,
      "packets-received": 487,
      "packets-sent": 0,
      "bytes-received": 49277,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 139
   }
},
{
   "type": 32,
   "timestamp": 1499105786270716,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 142204873,
      "lost": 34,
      "lost-by-remote": 0,
      "jitter-local": 981,
      "jitter-remote": 0,
      "packets-received": 116,
      "packets-sent": 0,
      "bytes-received": 85711,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 67
   }
},
{
   "type": 32,
   "timestamp": 1499105786494035,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 0,
      "packets-received": 0,
      "packets-sent": 147,
      "bytes-received": 0,
      "bytes-sent": 16263,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105786495584,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 9,
      "packets-received": 0,
      "packets-sent": 46,
      "bytes-received": 0,
      "bytes-sent": 34375,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105786585312,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 0,
      "packets-received": 0,
      "packets-sent": 199,
      "bytes-received": 0,
      "bytes-sent": 22089,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105786585321,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 18,
      "packets-received": 0,
      "packets-sent": 44,
      "bytes-received": 0,
      "bytes-sent": 32298,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105787270952,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 142241246,
      "lost": 70,
      "lost-by-remote": 0,
      "jitter-local": 8,
      "jitter-remote": 0,
      "packets-received": 537,
      "packets-sent": 0,
      "bytes-received": 54327,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 139
   }
},
{
   "type": 32,
   "timestamp": 1499105787270971,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 142291709,
      "lost": 34,
      "lost-by-remote": 0,
      "jitter-local": 517,
      "jitter-remote": 0,
      "packets-received": 126,
      "packets-sent": 0,
      "bytes-received": 95298,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 67
   }
},
{
   "type": 32,
   "timestamp": 1499105787417108,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 142186578,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 8,
      "jitter-remote": 0,
      "packets-received": 219,
      "packets-sent": 0,
      "bytes-received": 21173,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105787417127,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 142244184,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 918,
      "jitter-remote": 0,
      "packets-received": 75,
      "packets-sent": 0,
      "bytes-received": 59150,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105787513544,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 0,
      "packets-received": 0,
      "packets-sent": 198,
      "bytes-received": 0,
      "bytes-sent": 20836,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105787513553,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 9,
      "packets-received": 0,
      "packets-sent": 68,
      "bytes-received": 0,
      "bytes-sent": 54457,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105787609858,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 11,
      "packets-received": 0,
      "packets-sent": 250,
      "bytes-received": 0,
      "bytes-sent": 27750,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105787609885,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 17,
      "packets-received": 0,
      "packets-sent": 54,
      "bytes-received": 0,
      "bytes-sent": 42727,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105788271378,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 142241246,
      "lost": 70,
      "lost-by-remote": 0,
      "jitter-local": 10,
      "jitter-remote": 0,
      "packets-received": 587,
      "packets-sent": 0,
      "bytes-received": 59377,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 139
   }
},
{
   "type": 32,
   "timestamp": 1499105788271410,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 142341188,
      "lost": 34,
      "lost-by-remote": 0,
      "jitter-local": 260,
      "jitter-remote": 0,
      "packets-received": 137,
      "packets-sent": 0,
      "bytes-received": 106158,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 67
   }
},
{
   "type": 32,
   "timestamp": 1499105788540730,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 9,
      "packets-received": 0,
      "packets-sent": 249,
      "bytes-received": 0,
      "bytes-sent": 22938,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105788542526,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 15,
      "packets-received": 0,
      "packets-sent": 89,
      "bytes-received": 0,
      "bytes-sent": 72974,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105788610206,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 11,
      "packets-received": 0,
      "packets-sent": 300,
      "bytes-received": 0,
      "bytes-sent": 33300,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105788610217,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 11,
      "packets-received": 0,
      "packets-sent": 66,
      "bytes-received": 0,
      "bytes-sent": 54221,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105788704545,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 142186578,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 6,
      "jitter-remote": 0,
      "packets-received": 284,
      "packets-sent": 0,
      "bytes-received": 23219,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105788704558,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 142380827,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 207,
      "jitter-remote": 0,
      "packets-received": 99,
      "packets-sent": 0,
      "bytes-received": 80091,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105789271545,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 142241246,
      "lost": 70,
      "lost-by-remote": 0,
      "jitter-local": 10,
      "jitter-remote": 0,
      "packets-received": 637,
      "packets-sent": 0,
      "bytes-received": 62165,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 139
   }
},
{
   "type": 32,
   "timestamp": 1499105789271561,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 142341188,
      "lost": 34,
      "lost-by-remote": 0,
      "jitter-local": 132,
      "jitter-remote": 0,
      "packets-received": 148,
      "packets-sent": 0,
      "bytes-received": 117024,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 67
   }
},
{
   "type": 32,
   "timestamp": 1499105789550645,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 9,
      "packets-received": 0,
      "packets-sent": 300,
      "bytes-received": 0,
      "bytes-sent": 24621,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105789550655,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 20,
      "packets-received": 0,
      "packets-sent": 109,
      "bytes-received": 0,
      "bytes-sent": 90707,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105789615739,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 11,
      "packets-received": 0,
      "packets-sent": 350,
      "bytes-received": 0,
      "bytes-sent": 35340,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105789622529,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 12,
      "packets-received": 0,
      "packets-sent": 76,
      "bytes-received": 0,
      "bytes-sent": 64896,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105789704770,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 142186578,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 6,
      "jitter-remote": 0,
      "packets-received": 334,
      "packets-sent": 0,
      "bytes-received": 24369,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105789704805,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 142453965,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 71,
      "jitter-remote": 0,
      "packets-received": 119,
      "packets-sent": 0,
      "bytes-received": 97631,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105790271699,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 142241246,
      "lost": 70,
      "lost-by-remote": 0,
      "jitter-local": 9,
      "jitter-remote": 0,
      "packets-received": 683,
      "packets-sent": 0,
      "bytes-received": 63223,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 139
   }
},
{
   "type": 32,
   "timestamp": 1499105790271712,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 142429531,
      "lost": 34,
      "lost-by-remote": 0,
      "jitter-local": 70,
      "jitter-remote": 0,
      "packets-received": 159,
      "packets-sent": 0,
      "bytes-received": 127272,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 67
   }
},
{
   "type": 32,
   "timestamp": 1499105790675979,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 9,
      "packets-received": 0,
      "packets-sent": 333,
      "bytes-received": 0,
      "bytes-sent": 25710,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105790675991,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 20,
      "packets-received": 0,
      "packets-sent": 121,
      "bytes-received": 0,
      "bytes-sent": 101135,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105790679226,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 11,
      "packets-received": 0,
      "packets-sent": 380,
      "bytes-received": 0,
      "bytes-sent": 36330,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105790679236,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 12,
      "packets-received": 0,
      "packets-sent": 84,
      "bytes-received": 0,
      "bytes-sent": 71763,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105790704962,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 142186578,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 8,
      "jitter-remote": 0,
      "packets-received": 358,
      "packets-sent": 0,
      "bytes-received": 24921,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105790704975,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 142453965,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 49,
      "jitter-remote": 0,
      "packets-received": 129,
      "packets-sent": 0,
      "bytes-received": 106116,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105790926766,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "slow_link": "downlink",
      "nacks_lastsec": 8
   }
},
{
   "type": 32,
   "timestamp": 1499105791002173,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "audio",
      "slow_link": "downlink",
      "nacks_lastsec": 11
   }
},
{
   "type": 32,
   "timestamp": 1499105791427205,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 142241246,
      "lost": 78,
      "lost-by-remote": 0,
      "jitter-local": 34,
      "jitter-remote": 0,
      "packets-received": 690,
      "packets-sent": 0,
      "bytes-received": 63384,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 147
   }
},
{
   "type": 32,
   "timestamp": 1499105791427216,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 142429531,
      "lost": 36,
      "lost-by-remote": 0,
      "jitter-local": 88,
      "jitter-remote": 0,
      "packets-received": 161,
      "packets-sent": 0,
      "bytes-received": 128521,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 67
   }
},
{
   "type": 32,
   "timestamp": 1499105792146484,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "audio",
      "slow_link": "downlink",
      "nacks_lastsec": 55
   }
},
{
   "type": 32,
   "timestamp": 1499105792146578,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "slow_link": "downlink",
      "nacks_lastsec": 58
   }
},
{
   "type": 32,
   "timestamp": 1499105792146605,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 9,
      "packets-received": 0,
      "packets-sent": 347,
      "bytes-received": 0,
      "bytes-sent": 26172,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105792146611,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 21,
      "packets-received": 0,
      "packets-sent": 125,
      "bytes-received": 0,
      "bytes-sent": 104498,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105792146816,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 142186578,
      "lost": 55,
      "lost-by-remote": 0,
      "jitter-local": 39,
      "jitter-remote": 0,
      "packets-received": 373,
      "packets-sent": 0,
      "bytes-received": 25266,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 58
   }
},
{
   "type": 32,
   "timestamp": 1499105792146822,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 142453965,
      "lost": 14,
      "lost-by-remote": 0,
      "jitter-local": 64,
      "jitter-remote": 0,
      "packets-received": 133,
      "packets-sent": 0,
      "bytes-received": 109439,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 8
   }
},
{
   "type": 32,
   "timestamp": 1499105792146905,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 11,
      "packets-received": 0,
      "packets-sent": 391,
      "bytes-received": 0,
      "bytes-sent": 36693,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105792146914,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 12,
      "packets-received": 0,
      "packets-sent": 87,
      "bytes-received": 0,
      "bytes-sent": 74133,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 128,
   "timestamp": 1499105792282239,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad402a620",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105792282400,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad00341e0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105792284175,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d85c0a0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105792343686,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403d390",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 64,
   "timestamp": 1499105792343841,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "unpublished",
         "room": 1234,
         "id": 7468932778387495
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105792343847,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "connection": "hangup"
   }
},
{
   "type": 32,
   "timestamp": 1499105792429879,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 142241246,
      "lost": 143,
      "lost-by-remote": 0,
      "jitter-local": 25,
      "jitter-remote": 0,
      "packets-received": 724,
      "packets-sent": 0,
      "bytes-received": 64166,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 285
   }
},
{
   "type": 32,
   "timestamp": 1499105792429889,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 142628171,
      "lost": 54,
      "lost-by-remote": 0,
      "jitter-local": 88,
      "jitter-remote": 0,
      "packets-received": 173,
      "packets-sent": 0,
      "bytes-received": 139227,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 102
   }
},
{
   "type": 128,
   "timestamp": 1499105792540127,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403d390",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105792594373,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403d390",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105792756748,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403d390",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105792806727,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403d390",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105792968904,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403d390",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105792992675,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "connection": "hangup"
   }
},
{
   "type": 128,
   "timestamp": 1499105792996897,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403d390",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105793015275,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403d390",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 2,
   "timestamp": 1499105793015396,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "name": "detached",
      "plugin": "janus.plugin.videoroom"
   }
},
{
   "type": 128,
   "timestamp": 1499105793027733,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d86fc60",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 32,
   "timestamp": 1499105793158379,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 11,
      "packets-received": 0,
      "packets-sent": 457,
      "bytes-received": 0,
      "bytes-sent": 38871,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105793158390,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 16,
      "jitter-local": 0,
      "jitter-remote": 84,
      "packets-received": 0,
      "packets-sent": 114,
      "bytes-received": 0,
      "bytes-sent": 96851,
      "nacks-received": 133,
      "nacks-sent": 0
   }
},
{
   "type": 128,
   "timestamp": 1499105793190176,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d86fc60",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105793240983,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d86fc60",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105793401079,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d86ffb0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 32,
   "timestamp": 1499105793415588,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 9,
      "packets-received": 0,
      "packets-sent": 373,
      "bytes-received": 0,
      "bytes-sent": 27030,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105793415602,
   "session_id": uuid1,
   "handle_id": 1947809509279987,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 30,
      "jitter-local": 0,
      "jitter-remote": 116,
      "packets-received": 0,
      "packets-sent": 137,
      "bytes-received": 0,
      "bytes-sent": 114434,
      "nacks-received": 201,
      "nacks-sent": 0
   }
},
{
   "type": 128,
   "timestamp": 1499105793452692,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d86ffb0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105793613060,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad403d390",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 32,
   "timestamp": 1499105793682670,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 142241246,
      "lost": 143,
      "lost-by-remote": 0,
      "jitter-local": 7,
      "jitter-remote": 0,
      "packets-received": 788,
      "packets-sent": 0,
      "bytes-received": 65638,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 285
   }
},
{
   "type": 32,
   "timestamp": 1499105793682681,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 142707141,
      "lost": 54,
      "lost-by-remote": 0,
      "jitter-local": 44,
      "jitter-remote": 0,
      "packets-received": 200,
      "packets-sent": 0,
      "bytes-received": 160718,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 105
   }
},
{
   "type": 128,
   "timestamp": 1499105793977948,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad00341e0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105793991849,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad00341e0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 64,
   "timestamp": 1499105793991979,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "unpublished",
         "room": 1234,
         "id": 5620321221303244
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105793991986,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "connection": "hangup"
   }
},
{
   "type": 16,
   "timestamp": 1499105794071117,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "connection": "hangup"
   }
},
{
   "type": 128,
   "timestamp": 1499105794080218,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d86ffb0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105794091702,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d86ffb0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 2,
   "timestamp": 1499105794091778,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "name": "detached",
      "plugin": "janus.plugin.videoroom"
   }
},
{
   "type": 128,
   "timestamp": 1499105794227318,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d86ffb0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105794271123,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d86ffb0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105794438910,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d86ffb0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105794489904,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4030160",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 32,
   "timestamp": 1499105794491881,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 71,
      "jitter-local": 0,
      "jitter-remote": 16,
      "packets-received": 0,
      "packets-sent": 500,
      "bytes-received": 0,
      "bytes-sent": 40290,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105794491890,
   "session_id": uuid2,
   "handle_id": 1024724638386209,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 16,
      "jitter-local": 0,
      "jitter-remote": 74,
      "packets-received": 0,
      "packets-sent": 129,
      "bytes-received": 0,
      "bytes-sent": 108653,
      "nacks-received": 141,
      "nacks-sent": 0
   }
},
{
   "type": 128,
   "timestamp": 1499105794699688,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4030160",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105795905832,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad00341e0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 8,
   "timestamp": 1499105795911163,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "owner": "remote",
      "jsep": {
         "type": "offer",
         "sdp": "v=0\r\no=- 3429595813070295031 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE audio video\r\na=msid-semantic: WMS WossvkJcRNsXf9ykVGiGRVb5P6WWYLo16e2Z\r\nm=audio 9 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 106 105 13 110 112 113 126\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:Akjd\r\na=ice-pwd:HTQ6wXcWMX44I5PkhA5BUqsO\r\na=fingerprint:sha-256 64:64:5B:D8:AD:D3:02:52:96:D8:D2:63:9D:32:C1:F5:1F:A3:8B:EC:15:97:E3:BF:BB:E7:2E:05:DE:A2:3E:B9\r\na=setup:actpass\r\na=mid:audio\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=sendonly\r\na=rtcp-mux\r\na=rtpmap:111 opus/48000/2\r\na=rtcp-fb:111 transport-cc\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtpmap:103 ISAC/16000\r\na=rtpmap:104 ISAC/32000\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:106 CN/32000\r\na=rtpmap:105 CN/16000\r\na=rtpmap:13 CN/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:112 telephone-event/32000\r\na=rtpmap:113 telephone-event/16000\r\na=rtpmap:126 telephone-event/8000\r\na=ssrc:2507203079 cname:/gYr+6Y2KO+Gi7le\r\na=ssrc:2507203079 msid:WossvkJcRNsXf9ykVGiGRVb5P6WWYLo16e2Z 7b059565-8c8b-460a-b8c3-323c76ab48b7\r\na=ssrc:2507203079 mslabel:WossvkJcRNsXf9ykVGiGRVb5P6WWYLo16e2Z\r\na=ssrc:2507203079 label:7b059565-8c8b-460a-b8c3-323c76ab48b7\r\nm=video 9 UDP/TLS/RTP/SAVPF 96 98 100 102 127 97 99 101 125\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:Akjd\r\na=ice-pwd:HTQ6wXcWMX44I5PkhA5BUqsO\r\na=fingerprint:sha-256 64:64:5B:D8:AD:D3:02:52:96:D8:D2:63:9D:32:C1:F5:1F:A3:8B:EC:15:97:E3:BF:BB:E7:2E:05:DE:A2:3E:B9\r\na=setup:actpass\r\na=mid:video\r\na=extmap:2 urn:ietf:params:rtp-hdrext:toffset\r\na=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:4 urn:3gpp:video-orientation\r\na=extmap:5 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\na=sendonly\r\na=rtcp-mux\r\na=rtcp-rsize\r\na=rtpmap:96 VP8/90000\r\na=rtcp-fb:96 ccm fir\r\na=rtcp-fb:96 nack\r\na=rtcp-fb:96 nack pli\r\na=rtcp-fb:96 goog-remb\r\na=rtcp-fb:96 transport-cc\r\na=rtpmap:98 VP9/90000\r\na=rtcp-fb:98 ccm fir\r\na=rtcp-fb:98 nack\r\na=rtcp-fb:98 nack pli\r\na=rtcp-fb:98 goog-remb\r\na=rtcp-fb:98 transport-cc\r\na=rtpmap:100 H264/90000\r\na=rtcp-fb:100 ccm fir\r\na=rtcp-fb:100 nack\r\na=rtcp-fb:100 nack pli\r\na=rtcp-fb:100 goog-remb\r\na=rtcp-fb:100 transport-cc\r\na=fmtp:100 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f\r\na=rtpmap:102 red/90000\r\na=rtpmap:127 ulpfec/90000\r\na=rtpmap:97 rtx/90000\r\na=fmtp:97 apt=96\r\na=rtpmap:99 rtx/90000\r\na=fmtp:99 apt=98\r\na=rtpmap:101 rtx/90000\r\na=fmtp:101 apt=100\r\na=rtpmap:125 rtx/90000\r\na=fmtp:125 apt=102\r\na=ssrc-group:FID 1993939658 2465455592\r\na=ssrc:1993939658 cname:/gYr+6Y2KO+Gi7le\r\na=ssrc:1993939658 msid:WossvkJcRNsXf9ykVGiGRVb5P6WWYLo16e2Z 07543fec-7be4-4aa3-985b-6d0d292b2e30\r\na=ssrc:1993939658 mslabel:WossvkJcRNsXf9ykVGiGRVb5P6WWYLo16e2Z\r\na=ssrc:1993939658 label:07543fec-7be4-4aa3-985b-6d0d292b2e30\r\na=ssrc:2465455592 cname:/gYr+6Y2KO+Gi7le\r\na=ssrc:2465455592 msid:WossvkJcRNsXf9ykVGiGRVb5P6WWYLo16e2Z 07543fec-7be4-4aa3-985b-6d0d292b2e30\r\na=ssrc:2465455592 mslabel:WossvkJcRNsXf9ykVGiGRVb5P6WWYLo16e2Z\r\na=ssrc:2465455592 label:07543fec-7be4-4aa3-985b-6d0d292b2e30\r\n"
      }
   }
},
{
   "type": 64,
   "timestamp": 1499105795913080,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "configured",
         "room": 1234,
         "id": 5620321221303244,
         "audio_active": true,
         "video_active": true,
         "bitrate": 128000
      }
   }
},
{
   "type": 8,
   "timestamp": 1499105795913363,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "owner": "local",
      "jsep": {
         "type": "answer",
         "sdp": "v=0\r\no=- 1499105795913218 1499105795913218 IN IP4 127.0.0.1\r\ns=Demo Room\r\nt=0 0\r\nm=audio 1 RTP/SAVPF 111\r\nc=IN IP4 1.1.1.1\r\na=recvonly\r\na=rtpmap:111 opus/48000/2\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\nm=video 1 RTP/SAVPF 96\r\nc=IN IP4 1.1.1.1\r\na=recvonly\r\na=rtpmap:96 VP8/90000\r\na=rtcp-fb:96 ccm fir\r\na=rtcp-fb:96 nack\r\na=rtcp-fb:96 nack pli\r\na=rtcp-fb:96 goog-remb\r\na=extmap:4 urn:3gpp:video-orientation\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\n"
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105795930670,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab801d640",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105795932482,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad00341e0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105795932736,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "ice": "connecting",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 128,
   "timestamp": 1499105795946692,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab801d640",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105795957915,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d803e40",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105795959643,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0014330",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105795959795,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab801d640",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105795983419,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d845610",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105795984245,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab801d640",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105796018746,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab801d640",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105796018831,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d847000",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105796027350,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0009a40",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105796040580,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0009a40",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105796135794,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "selected-pair": "192.168.1.89:36450 [host,udp] <-> 192.168.1.106:49816 [host,udp]",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105796140314,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "dtls": "trying",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105796140389,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "ice": "connected",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105796140510,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "ice": "ready",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 128,
   "timestamp": 1499105796157258,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0009a40",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105796193546,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "dtls": "connected",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 64,
   "timestamp": 1499105796195550,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "published",
         "room": 1234,
         "id": 5620321221303244
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105796195581,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "connection": "webrtcup"
   }
},
{
   "type": 32,
   "timestamp": 1499105796208583,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "receiving": true
   }
},
{
   "type": 128,
   "timestamp": 1499105796232025,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4059250",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105796243488,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad402b6b0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 2,
   "timestamp": 1499105796243925,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "name": "attached",
      "plugin": "janus.plugin.videoroom",
      "opaque_id": "videoroomtest-"+opq2
   }
},
{
   "type": 128,
   "timestamp": 1499105796271626,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4042400",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105796281954,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4054de0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 8,
   "timestamp": 1499105796301514,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "owner": "local",
      "jsep": {
         "type": "offer",
         "sdp": "v=0\r\no=- 1499105795913378 1499105795913378 IN IP4 127.0.0.1\r\ns=Demo Room\r\nt=0 0\r\nm=audio 1 RTP/SAVPF 111\r\nc=IN IP4 1.1.1.1\r\na=sendonly\r\na=rtpmap:111 opus/48000/2\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\nm=video 1 RTP/SAVPF 100\r\nc=IN IP4 1.1.1.1\r\na=sendonly\r\na=rtpmap:100 VP8/90000\r\na=rtcp-fb:100 ccm fir\r\na=rtcp-fb:100 nack\r\na=rtcp-fb:100 nack pli\r\na=rtcp-fb:100 goog-remb\r\na=extmap:4 urn:3gpp:video-orientation\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\n"
      }
   }
},
{
   "type": 64,
   "timestamp": 1499105796305644,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "subscribing",
         "room": 1234,
         "feed": 5620321221303244,
         "private_id": 3264178256
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105796444349,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad405ed60",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105796480795,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad402baa0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105796499744,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4030a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 8,
   "timestamp": 1499105796500733,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "owner": "remote",
      "jsep": {
         "type": "answer",
         "sdp": "v=0\r\no=- 1497636771166661255 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE audio video\r\na=msid-semantic: WMS\r\nm=audio 9 RTP/SAVPF 111\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:2T5q\r\na=ice-pwd:0iVZx8gzuEmd9F25wPSjo4e9\r\na=fingerprint:sha-256 4A:1F:43:1D:42:5A:0B:80:F6:D1:FE:13:56:DD:75:45:CD:BB:A9:8C:7A:AE:5B:EB:85:51:51:BF:3E:E3:C8:0B\r\na=setup:active\r\na=mid:audio\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=recvonly\r\na=rtcp-mux\r\na=rtpmap:111 opus/48000/2\r\na=fmtp:111 minptime=10;useinbandfec=1\r\nm=video 9 RTP/SAVPF 100\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:2T5q\r\na=ice-pwd:0iVZx8gzuEmd9F25wPSjo4e9\r\na=fingerprint:sha-256 4A:1F:43:1D:42:5A:0B:80:F6:D1:FE:13:56:DD:75:45:CD:BB:A9:8C:7A:AE:5B:EB:85:51:51:BF:3E:E3:C8:0B\r\na=setup:active\r\na=mid:video\r\na=extmap:4 urn:3gpp:video-orientation\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\na=recvonly\r\na=rtcp-mux\r\na=rtpmap:100 VP8/90000\r\na=rtcp-fb:100 ccm fir\r\na=rtcp-fb:100 nack\r\na=rtcp-fb:100 nack pli\r\na=rtcp-fb:100 goog-remb\r\n"
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105796504022,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0009a40",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105796504115,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8034810",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105796504454,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "ice": "connecting",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 128,
   "timestamp": 1499105796510064,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d833ef0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105796511704,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4037310",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105796529684,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "selected-pair": "192.168.1.89:40553 [host,udp] <-> 192.168.1.106:49823 [host,udp]",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105796529823,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "dtls": "trying",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105796529842,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "ice": "connected",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105796530318,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "ice": "ready",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105796614553,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "dtls": "connected",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 64,
   "timestamp": 1499105796615237,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "subscribed",
         "room": 1234,
         "feed": 5620321221303244
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105796615274,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "connection": "webrtcup"
   }
},
{
   "type": 32,
   "timestamp": 1499105796653868,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "receiving": true
   }
},
{
   "type": 128,
   "timestamp": 1499105796664681,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4059250",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105796699613,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad402b6b0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105796879971,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4042400",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105796914639,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad405e940",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797090649,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d833ef0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797281327,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0009a40",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 8,
   "timestamp": 1499105797289997,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "owner": "remote",
      "jsep": {
         "type": "offer",
         "sdp": "v=0\r\no=- 4543065304494925516 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE audio video\r\na=msid-semantic: WMS iOso7f4YzyxQQzf1ZHZ3nlUNxq8xxiRd42As\r\nm=audio 9 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 106 105 13 110 112 113 126\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:lIGV\r\na=ice-pwd:ZA5ombG0bdJN2uIcK6FwBq+j\r\na=fingerprint:sha-256 F8:A8:BB:78:87:33:5A:80:CD:83:60:1D:E8:BC:F4:1F:9D:8B:5A:9C:C8:CD:B1:5D:27:1C:0A:86:E1:25:8E:FD\r\na=setup:actpass\r\na=mid:audio\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=sendonly\r\na=rtcp-mux\r\na=rtpmap:111 opus/48000/2\r\na=rtcp-fb:111 transport-cc\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtpmap:103 ISAC/16000\r\na=rtpmap:104 ISAC/32000\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:106 CN/32000\r\na=rtpmap:105 CN/16000\r\na=rtpmap:13 CN/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:112 telephone-event/32000\r\na=rtpmap:113 telephone-event/16000\r\na=rtpmap:126 telephone-event/8000\r\na=ssrc:3951508093 cname:1I/fXgWDX8G8rjPY\r\na=ssrc:3951508093 msid:iOso7f4YzyxQQzf1ZHZ3nlUNxq8xxiRd42As ef875e0b-d592-48d4-a964-1061b4d8917d\r\na=ssrc:3951508093 mslabel:iOso7f4YzyxQQzf1ZHZ3nlUNxq8xxiRd42As\r\na=ssrc:3951508093 label:ef875e0b-d592-48d4-a964-1061b4d8917d\r\nm=video 9 UDP/TLS/RTP/SAVPF 96 98 100 102 127 97 99 101 125\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:lIGV\r\na=ice-pwd:ZA5ombG0bdJN2uIcK6FwBq+j\r\na=fingerprint:sha-256 F8:A8:BB:78:87:33:5A:80:CD:83:60:1D:E8:BC:F4:1F:9D:8B:5A:9C:C8:CD:B1:5D:27:1C:0A:86:E1:25:8E:FD\r\na=setup:actpass\r\na=mid:video\r\na=extmap:2 urn:ietf:params:rtp-hdrext:toffset\r\na=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:4 urn:3gpp:video-orientation\r\na=extmap:5 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\na=sendonly\r\na=rtcp-mux\r\na=rtcp-rsize\r\na=rtpmap:96 VP8/90000\r\na=rtcp-fb:96 ccm fir\r\na=rtcp-fb:96 nack\r\na=rtcp-fb:96 nack pli\r\na=rtcp-fb:96 goog-remb\r\na=rtcp-fb:96 transport-cc\r\na=rtpmap:98 VP9/90000\r\na=rtcp-fb:98 ccm fir\r\na=rtcp-fb:98 nack\r\na=rtcp-fb:98 nack pli\r\na=rtcp-fb:98 goog-remb\r\na=rtcp-fb:98 transport-cc\r\na=rtpmap:100 H264/90000\r\na=rtcp-fb:100 ccm fir\r\na=rtcp-fb:100 nack\r\na=rtcp-fb:100 nack pli\r\na=rtcp-fb:100 goog-remb\r\na=rtcp-fb:100 transport-cc\r\na=fmtp:100 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f\r\na=rtpmap:102 red/90000\r\na=rtpmap:127 ulpfec/90000\r\na=rtpmap:97 rtx/90000\r\na=fmtp:97 apt=96\r\na=rtpmap:99 rtx/90000\r\na=fmtp:99 apt=98\r\na=rtpmap:101 rtx/90000\r\na=fmtp:101 apt=100\r\na=rtpmap:125 rtx/90000\r\na=fmtp:125 apt=102\r\na=ssrc-group:FID 3518800380 2077620537\r\na=ssrc:3518800380 cname:1I/fXgWDX8G8rjPY\r\na=ssrc:3518800380 msid:iOso7f4YzyxQQzf1ZHZ3nlUNxq8xxiRd42As 5cb8d6a3-845c-4707-a269-5d2c4b6eebc7\r\na=ssrc:3518800380 mslabel:iOso7f4YzyxQQzf1ZHZ3nlUNxq8xxiRd42As\r\na=ssrc:3518800380 label:5cb8d6a3-845c-4707-a269-5d2c4b6eebc7\r\na=ssrc:2077620537 cname:1I/fXgWDX8G8rjPY\r\na=ssrc:2077620537 msid:iOso7f4YzyxQQzf1ZHZ3nlUNxq8xxiRd42As 5cb8d6a3-845c-4707-a269-5d2c4b6eebc7\r\na=ssrc:2077620537 mslabel:iOso7f4YzyxQQzf1ZHZ3nlUNxq8xxiRd42As\r\na=ssrc:2077620537 label:5cb8d6a3-845c-4707-a269-5d2c4b6eebc7\r\n"
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797293293,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8034810",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 64,
   "timestamp": 1499105797293438,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "configured",
         "room": 1234,
         "id": 7468932778387495,
         "audio_active": true,
         "video_active": true,
         "bitrate": 128000
      }
   }
},
{
   "type": 32,
   "timestamp": 1499105797339693,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 4849,
      "jitter-remote": 0,
      "packets-received": 54,
      "packets-sent": 0,
      "bytes-received": 5476,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105797339714,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 142910237,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 201600,
      "jitter-remote": 0,
      "packets-received": 8,
      "packets-sent": 0,
      "bytes-received": 4050,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 128,
   "timestamp": 1499105797339955,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab803c880",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797344247,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0013900",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797355346,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab803c880",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797363260,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0013900",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105797366589,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "ice": "connecting",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 8,
   "timestamp": 1499105797380863,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "owner": "local",
      "jsep": {
         "type": "answer",
         "sdp": "v=0\r\no=- 1499105797364809 1499105797364808 IN IP4 127.0.0.1\r\ns=Demo Room\r\nt=0 0\r\nm=audio 1 RTP/SAVPF 111\r\nc=IN IP4 1.1.1.1\r\na=recvonly\r\na=rtpmap:111 opus/48000/2\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\nm=video 1 RTP/SAVPF 96\r\nc=IN IP4 1.1.1.1\r\na=recvonly\r\na=rtpmap:96 VP8/90000\r\na=rtcp-fb:96 ccm fir\r\na=rtcp-fb:96 nack\r\na=rtcp-fb:96 nack pli\r\na=rtcp-fb:96 goog-remb\r\na=extmap:4 urn:3gpp:video-orientation\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\n"
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797381763,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab803c880",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797381969,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0013900",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797399886,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0013900",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797400025,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab803c880",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797416060,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d86c2c0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797425707,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0013900",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797425999,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab803c880",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797432969,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d855a10",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797447879,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0013900",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797449152,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab803c880",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797457164,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d855a10",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797467393,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0013900",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797469508,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab803c880",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797493483,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d855a10",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797494079,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0013900",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797503178,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d855a10",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797504119,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab803c880",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797509470,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0013900",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797522956,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d854590",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797531739,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0013900",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797533661,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d854570",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 32,
   "timestamp": 1499105797543146,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 0,
      "packets-received": 0,
      "packets-sent": 46,
      "bytes-received": 0,
      "bytes-sent": 5212,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105797543167,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 2,
      "packets-received": 0,
      "packets-sent": 11,
      "bytes-received": 0,
      "bytes-sent": 5926,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 16,
   "timestamp": 1499105797591182,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "selected-pair": "192.168.1.89:43019 [host,udp] <-> 192.168.1.106:49826 [host,udp]",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105797591940,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "dtls": "trying",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105797592062,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "ice": "connected",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105797592151,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "ice": "ready",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 128,
   "timestamp": 1499105797624690,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d86c890",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105797641691,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "dtls": "connected",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 64,
   "timestamp": 1499105797641995,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "published",
         "room": 1234,
         "id": 7468932778387495
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105797642003,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "connection": "webrtcup"
   }
},
{
   "type": 32,
   "timestamp": 1499105797662905,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "audio",
      "receiving": true
   }
},
{
   "type": 128,
   "timestamp": 1499105797677130,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4042400",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797691683,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4037310",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 2,
   "timestamp": 1499105797691751,
   "session_id": uuid1,
   "handle_id": 7150481353068837,
   "event": {
      "name": "attached",
      "plugin": "janus.plugin.videoroom",
      "opaque_id": "videoroomtest-"+opq1
   }
},
{
   "type": 128,
   "timestamp": 1499105797703369,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4042400",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797727784,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4042400",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 8,
   "timestamp": 1499105797728779,
   "session_id": uuid1,
   "handle_id": 7150481353068837,
   "event": {
      "owner": "local",
      "jsep": {
         "type": "offer",
         "sdp": "v=0\r\no=- 1499105797380912 1499105797380912 IN IP4 127.0.0.1\r\ns=Demo Room\r\nt=0 0\r\nm=audio 1 RTP/SAVPF 111\r\nc=IN IP4 1.1.1.1\r\na=sendonly\r\na=rtpmap:111 opus/48000/2\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\nm=video 1 RTP/SAVPF 100\r\nc=IN IP4 1.1.1.1\r\na=sendonly\r\na=rtpmap:100 VP8/90000\r\na=rtcp-fb:100 ccm fir\r\na=rtcp-fb:100 nack\r\na=rtcp-fb:100 nack pli\r\na=rtcp-fb:100 goog-remb\r\na=extmap:4 urn:3gpp:video-orientation\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\n"
      }
   }
},
{
   "type": 64,
   "timestamp": 1499105797728797,
   "session_id": uuid1,
   "handle_id": 7150481353068837,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "subscribing",
         "room": 1234,
         "feed": 7468932778387495,
         "private_id": 429531305
      }
   }
},
{
   "type": 32,
   "timestamp": 1499105797768135,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "video",
      "receiving": true
   }
},
{
   "type": 128,
   "timestamp": 1499105797870058,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4042400",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797938541,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4030a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 8,
   "timestamp": 1499105797938821,
   "session_id": uuid1,
   "handle_id": 7150481353068837,
   "event": {
      "owner": "remote",
      "jsep": {
         "type": "answer",
         "sdp": "v=0\r\no=- 1927634184874722145 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE audio video\r\na=msid-semantic: WMS\r\nm=audio 9 RTP/SAVPF 111\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:4h19\r\na=ice-pwd:oM2w8fHX4OtXEirR5xZaSNvU\r\na=fingerprint:sha-256 C0:4F:08:D4:C7:01:5C:BD:4D:F6:F5:E2:16:B8:9B:F5:1A:9C:C3:2F:FA:8E:D1:9C:69:2E:D7:20:16:5E:A4:65\r\na=setup:active\r\na=mid:audio\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=recvonly\r\na=rtcp-mux\r\na=rtpmap:111 opus/48000/2\r\na=fmtp:111 minptime=10;useinbandfec=1\r\nm=video 9 RTP/SAVPF 100\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:4h19\r\na=ice-pwd:oM2w8fHX4OtXEirR5xZaSNvU\r\na=fingerprint:sha-256 C0:4F:08:D4:C7:01:5C:BD:4D:F6:F5:E2:16:B8:9B:F5:1A:9C:C3:2F:FA:8E:D1:9C:69:2E:D7:20:16:5E:A4:65\r\na=setup:active\r\na=mid:video\r\na=extmap:4 urn:3gpp:video-orientation\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\na=recvonly\r\na=rtcp-mux\r\na=rtpmap:100 VP8/90000\r\na=rtcp-fb:100 ccm fir\r\na=rtcp-fb:100 nack\r\na=rtcp-fb:100 nack pli\r\na=rtcp-fb:100 goog-remb\r\n"
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797942025,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d83efa0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797971511,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4030a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105797971937,
   "session_id": uuid1,
   "handle_id": 7150481353068837,
   "event": {
      "ice": "connecting",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 128,
   "timestamp": 1499105797974078,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d86cab0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797978415,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0013c70",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105797990726,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8008a90",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105797991791,
   "session_id": uuid1,
   "handle_id": 7150481353068837,
   "event": {
      "selected-pair": "192.168.1.89:51063 [host,udp] <-> 192.168.1.106:49833 [host,udp]",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105797991972,
   "session_id": uuid1,
   "handle_id": 7150481353068837,
   "event": {
      "dtls": "trying",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105797992019,
   "session_id": uuid1,
   "handle_id": 7150481353068837,
   "event": {
      "ice": "connected",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 16,
   "timestamp": 1499105797992406,
   "session_id": uuid1,
   "handle_id": 7150481353068837,
   "event": {
      "ice": "ready",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 128,
   "timestamp": 1499105798087415,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8008a90",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105798089056,
   "session_id": uuid1,
   "handle_id": 7150481353068837,
   "event": {
      "dtls": "connected",
      "stream_id": 1,
      "component_id": 1
   }
},
{
   "type": 64,
   "timestamp": 1499105798094283,
   "session_id": uuid1,
   "handle_id": 7150481353068837,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "subscribed",
         "room": 1234,
         "feed": 7468932778387495
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105798094308,
   "session_id": uuid1,
   "handle_id": 7150481353068837,
   "event": {
      "connection": "webrtcup"
   }
},
{
   "type": 128,
   "timestamp": 1499105798175316,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8008a90",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105798299243,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8008a90",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 32,
   "timestamp": 1499105798340928,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 176,
      "jitter-remote": 0,
      "packets-received": 106,
      "packets-sent": 0,
      "bytes-received": 10973,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105798340943,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 142991830,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 92934,
      "jitter-remote": 0,
      "packets-received": 20,
      "packets-sent": 0,
      "bytes-received": 13892,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 128,
   "timestamp": 1499105798390489,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8008a90",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105798518882,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d854920",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 32,
   "timestamp": 1499105798567876,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 0,
      "packets-received": 0,
      "packets-sent": 96,
      "bytes-received": 0,
      "bytes-sent": 10932,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105798567933,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 11,
      "packets-received": 0,
      "packets-sent": 23,
      "bytes-received": 0,
      "bytes-sent": 16112,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105798594332,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 5985,
      "jitter-remote": 0,
      "packets-received": 48,
      "packets-sent": 0,
      "bytes-received": 4442,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105798594347,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 143008137,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 571119,
      "jitter-remote": 0,
      "packets-received": 12,
      "packets-sent": 0,
      "bytes-received": 7277,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105798995425,
   "session_id": uuid1,
   "handle_id": 7150481353068837,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 0,
      "packets-received": 0,
      "packets-sent": 44,
      "bytes-received": 0,
      "bytes-sent": 3723,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105798998049,
   "session_id": uuid1,
   "handle_id": 7150481353068837,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 2,
      "packets-received": 0,
      "packets-sent": 10,
      "bytes-received": 0,
      "bytes-sent": 5431,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105799345620,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 143039540,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 13,
      "jitter-remote": 0,
      "packets-received": 157,
      "packets-sent": 0,
      "bytes-received": 16098,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105799345636,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 143041244,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 27275,
      "jitter-remote": 0,
      "packets-received": 39,
      "packets-sent": 0,
      "bytes-received": 27907,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105799572036,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 0,
      "packets-received": 0,
      "packets-sent": 147,
      "bytes-received": 0,
      "bytes-sent": 16547,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105799574553,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 11,
      "packets-received": 0,
      "packets-sent": 44,
      "bytes-received": 0,
      "bytes-sent": 32150,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105799594678,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 259,
      "jitter-remote": 0,
      "packets-received": 97,
      "packets-sent": 0,
      "bytes-received": 6747,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105799594691,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 143070790,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 280811,
      "jitter-remote": 0,
      "packets-received": 23,
      "packets-sent": 0,
      "bytes-received": 15341,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105800013084,
   "session_id": uuid1,
   "handle_id": 7150481353068837,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 0,
      "packets-received": 0,
      "packets-sent": 95,
      "bytes-received": 0,
      "bytes-sent": 5957,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105800013099,
   "session_id": uuid1,
   "handle_id": 7150481353068837,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 9,
      "packets-received": 0,
      "packets-sent": 24,
      "bytes-received": 0,
      "bytes-sent": 16149,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105800345934,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 143039540,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 7,
      "jitter-remote": 0,
      "packets-received": 208,
      "packets-sent": 0,
      "bytes-received": 21147,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105800345944,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 143118052,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 7514,
      "jitter-remote": 0,
      "packets-received": 59,
      "packets-sent": 0,
      "bytes-received": 43363,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105800575380,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 12,
      "packets-received": 0,
      "packets-sent": 197,
      "bytes-received": 0,
      "bytes-sent": 21565,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105800576775,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 16,
      "packets-received": 0,
      "packets-sent": 63,
      "bytes-received": 0,
      "bytes-sent": 47132,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105800594993,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 143148909,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 15,
      "jitter-remote": 0,
      "packets-received": 148,
      "packets-sent": 0,
      "bytes-received": 7920,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105800595006,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 143137374,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 87889,
      "jitter-remote": 0,
      "packets-received": 41,
      "packets-sent": 0,
      "bytes-received": 28756,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105801026787,
   "session_id": uuid1,
   "handle_id": 7150481353068837,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 11,
      "packets-received": 0,
      "packets-sent": 145,
      "bytes-received": 0,
      "bytes-sent": 7607,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105801026797,
   "session_id": uuid1,
   "handle_id": 7150481353068837,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 16,
      "packets-received": 0,
      "packets-sent": 43,
      "bytes-received": 0,
      "bytes-sent": 30714,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105801346095,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 143039540,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 6,
      "jitter-remote": 0,
      "packets-received": 257,
      "packets-sent": 0,
      "bytes-received": 23179,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105801346108,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 143187324,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 2216,
      "jitter-remote": 0,
      "packets-received": 78,
      "packets-sent": 0,
      "bytes-received": 58070,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 64,
   "timestamp": 1499105801425964,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "unpublished",
         "room": 1234,
         "id": 7468932778387495
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105801428364,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "connection": "hangup"
   }
},
{
   "type": 128,
   "timestamp": 1499105801433786,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0031570",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 64,
   "timestamp": 1499105801433973,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "unsubscribed",
         "room": 1234,
         "feed": 5620321221303244
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105801433986,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "connection": "hangup"
   }
},
{
   "type": 2,
   "timestamp": 1499105801434068,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "name": "detached",
      "plugin": "janus.plugin.videoroom"
   }
},
{
   "type": 128,
   "timestamp": 1499105801445274,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0031570",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105801445685,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d836960",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105801462327,
   "session_id": uuid1,
   "handle_id": 7150481353068837,
   "event": {
      "connection": "hangup"
   }
},
{
   "type": 128,
   "timestamp": 1499105801465590,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x55e21d82eb20",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61766
      }
   }
},
{
   "type": 2,
   "timestamp": 1499105801465681,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "name": "detached",
      "plugin": "janus.plugin.videoroom"
   }
},
{
   "type": 128,
   "timestamp": 1499105801466727,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0038af0",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 1,
   "timestamp": 1499105801466813,
   "session_id": uuid2,
   "event": {
      "name": "destroyed"
   }
},
{
   "type": 128,
   "timestamp": 1499105801471612,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4030a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 2,
   "timestamp": 1499105801471690,
   "session_id": uuid1,
   "handle_id": 7150481353068837,
   "event": {
      "name": "detached",
      "plugin": "janus.plugin.videoroom"
   }
},
{
   "type": 32,
   "timestamp": 1499105801595569,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 143148909,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 8,
      "jitter-remote": 0,
      "packets-received": 189,
      "packets-sent": 0,
      "bytes-received": 8863,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105801595583,
   "session_id": uuid2,
   "handle_id": 69919631797592,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 143209726,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 31305,
      "jitter-remote": 0,
      "packets-received": 57,
      "packets-sent": 0,
      "bytes-received": 40720,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 128,
   "timestamp": 1499105801649076,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8008a90",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105801878072,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8008a90",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 32,
   "timestamp": 1499105801931270,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 12,
      "packets-received": 0,
      "packets-sent": 241,
      "bytes-received": 0,
      "bytes-sent": 23757,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105801931283,
   "session_id": uuid2,
   "handle_id": 732599108977304,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 0,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 0,
      "jitter-remote": 17,
      "packets-received": 0,
      "packets-sent": 80,
      "bytes-received": 0,
      "bytes-sent": 60337,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 128,
   "timestamp": 1499105802087655,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8008a90",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 32,
   "timestamp": 1499105802351734,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 143039540,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 6,
      "jitter-remote": 0,
      "packets-received": 296,
      "packets-sent": 0,
      "bytes-received": 24858,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105802351750,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 143249845,
      "lost": 0,
      "lost-by-remote": 0,
      "jitter-local": 796,
      "jitter-remote": 0,
      "packets-received": 94,
      "packets-sent": 0,
      "bytes-received": 72739,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 0
   }
},
{
   "type": 32,
   "timestamp": 1499105802777616,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "slow_link": "downlink",
      "nacks_lastsec": 8
   }
},
{
   "type": 32,
   "timestamp": 1499105803370573,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 143039540,
      "lost": 32,
      "lost-by-remote": 0,
      "jitter-local": 27,
      "jitter-remote": 0,
      "packets-received": 306,
      "packets-sent": 0,
      "bytes-received": 25088,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 42
   }
},
{
   "type": 32,
   "timestamp": 1499105803370582,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 143249845,
      "lost": 4,
      "lost-by-remote": 0,
      "jitter-local": 727,
      "jitter-remote": 0,
      "packets-received": 96,
      "packets-sent": 0,
      "bytes-received": 74564,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 4
   }
},
{
   "type": 32,
   "timestamp": 1499105804054748,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "slow_link": "downlink",
      "nacks_lastsec": 79
   }
},
{
   "type": 32,
   "timestamp": 1499105804472704,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "audio",
      "base": 48000,
      "lsr": 143039540,
      "lost": 73,
      "lost-by-remote": 0,
      "jitter-local": 27,
      "jitter-remote": 0,
      "packets-received": 319,
      "packets-sent": 0,
      "bytes-received": 25387,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 95
   }
},
{
   "type": 32,
   "timestamp": 1499105804472714,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "media": "video",
      "base": 90000,
      "lsr": 143368072,
      "lost": 26,
      "lost-by-remote": 0,
      "jitter-local": 565,
      "jitter-remote": 0,
      "packets-received": 100,
      "packets-sent": 0,
      "bytes-received": 78159,
      "bytes-sent": 0,
      "nacks-received": 0,
      "nacks-sent": 30
   }
},
{
   "type": 128,
   "timestamp": 1499105804472857,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4030a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105804473026,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0038930",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 64,
   "timestamp": 1499105804478146,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "plugin": "janus.plugin.videoroom",
      "data": {
         "event": "unpublished",
         "room": 1234,
         "id": 5620321221303244
      }
   }
},
{
   "type": 16,
   "timestamp": 1499105804478184,
   "session_id": uuid1,
   "handle_id": 8796940787397620,
   "event": {
      "connection": "hangup"
   }
},
{
   "type": 128,
   "timestamp": 1499105804485597,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ab8008a90",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61737
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105804491085,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad0038930",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61811
      }
   }
},
{
   "type": 128,
   "timestamp": 1499105804491185,
   "event": {
      "transport": "janus.transport.http",
      "id": "0x7f0ad4030a80",
      "data": {
         "event": "request",
         "admin_api": false,
         "ip": "::ffff:"+ip1,
         "port": 61739
      }
   }
},
{
   "type": 1,
   "timestamp": 1499105804500507,
   "session_id": uuid1,
   "event": {
      "name": "destroyed"
   }
}
];

