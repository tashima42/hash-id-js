function CRC16(hash) {
  const hs = "4607";
  if (hash.length == hs.length
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function CRC16CCITT(hash) {
  const hs = "3d08";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function FCS16(hash) {
  const hs = "0e5b";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function CRC32(hash) {
  const hs = "b33fd057";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function ADLER32(hash) {
  const hs = "0607cb42";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function CRC32B(hash) {
  const hs = "b764a0d9";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function XOR32(hash) {
  const hs = "0000003f";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function GHash323(hash) {
  const hs = "80000000";
  if (hash.length == hs.length
    && is_digit(hash) == true
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function GHash325(hash) {
  const hs = "85318985";
  if (hash.length == hs.length
    && is_digit(hash) == true
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function DESUnix(hash) {
  const hs = "ZiY8YtDKXJwYQ";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
  )
    return true;
  else
    return false;
}
function MD5Half(hash) {
  const hs = "ae11fd697ec92c7c";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function MD5Middle(hash) {
  const hs = "7ec92c7c98de3fac";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function MySQL(hash) {
  const hs = "63cea4673fd25f46";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function DomainCachedCredentials(hash) {
  const hs = "f42005ec1afe77967cbc83dce1b4d714";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function Haval128(hash) {
  const hs = "d6e3ec49aa0f138a619f27609022df10";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function Haval128HMAC(hash) {
  const hs = "3ce8b0ffd75bc240fc7d967729cd6637";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function MD2(hash) {
  const hs = "08bbef4754d98806c373f2cd7d9a43c4";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function MD2HMAC(hash) {
  const hs = "4b61b72ead2b0eb0fa3b8a56556a6dca";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function MD4(hash) {
  const hs = "a2acde400e61410e79dacbdfc3413151";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function MD4HMAC(hash) {
  const hs = "6be20b66f2211fe937294c1c95d1cd4f";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function MD5(hash) {
  const hs = "ae11fd697ec92c7c98de3fac23aba525";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function MD5HMAC(hash) {
  const hs = "d57e43d2c7e397bf788f66541d6fdef9";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function MD5HMACWordpress(hash) {
  const hs = "3f47886719268dfa83468630948228f6";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function NTLM(hash) {
  const hs = "cc348bace876ea440a28ddaeb9fd3550";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function RAdminv2x(hash) {
  const hs = "baea31c728cbf0cd548476aa687add4b";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function RipeMD128(hash) {
  const hs = "4985351cd74aff0abc5a75a0c8a54115";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function RipeMD128HMAC(hash) {
  const hs = "ae1995b931cf4cbcf1ac6fbf1a83d1d3";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function SNEFRU128(hash) {
  const hs = "4fb58702b617ac4f7ca87ec77b93da8a";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function SNEFRU128HMAC(hash) {
  const hs = "59b2b9dcc7a9a7d089cecf1b83520350";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function Tiger128(hash) {
  const hs = "c086184486ec6388ff81ec9f23528727";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function Tiger128HMAC(hash) {
  const hs = "c87032009e7c4b2ea27eb6f99723454b";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5passsalt(hash) {
  const hs = "5634cc3b922578434d6e9342ff5913f7";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5saltmd5pass(hash) {
  const hs = "245c5763b95ba42d4b02d44bbcd916f1";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5saltpass(hash) {
  const hs = "22cc5ce1a1ef747cd3fa06106c148dfa";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5saltpasssalt(hash) {
  const hs = "469e9cdcaff745460595a7a386c4db0c";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5saltpassusername(hash) {
  const hs = "9ae20f88189f6e3a62711608ddb6f5fd";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5saltmd5passsalt(hash) {
  const hs = "de0237dc03a8efdf6552fbe7788b2fdd";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5saltmd5passsalt1(hash) {
  //TODO: note that is different from original project
  const hs = "5b8b12ca69d3e7b2a3e2308e7bef3e6f";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5saltmd5saltpass2(hash) {
  //TODO: note that is different from original project
  const hs = "d8f3b3f004d387086aae24326b575b23";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5saltmd5md5passsalt(hash) {
  const hs = "81f181454e23319779b03d74d062b1a2";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5username0pass(hash) {
  const hs = "e44a60f8f2106492ae16581c91edb3ba";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5usernameLFpass(hash) {
  const hs = "654741780db415732eaee12b1b909119";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5usernamemd5passsalt(hash) {
  const hs = "954ac5505fd1843bbb97d1b2cda0b98f";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5md5pass(hash) {
  const hs = "a96103d267d024583d5565436e52dfb3";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5md5passsalt(hash) {
  const hs = "5848c73c2482d3c2c7b6af134ed8dd89";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5md5passmd5salt(hash) {
  const hs = "8dc71ef37197b2edba02d48c30217b32";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5md5saltpass(hash) {
  const hs = "9032fabd905e273b9ceb1e124631bd67";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5md5saltmd5pass(hash) {
  const hs = "8966f37dbb4aca377a71a9d3d09cd1ac";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5md5usernamepasssalt(hash) {
  const hs = "4319a3befce729b34c3105dbc29d0c40";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5md5md5pass(hash) {
  const hs = "ea086739755920e732d0f4d8c1b6ad8d";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5md5md5md5pass(hash) {
  const hs = "02528c1f2ed8ac7d83fe76f3cf1c133f";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5md5md5md5md5pass(hash) {
  const hs = "4548d2c062933dff53928fd4ae427fc0";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5sha1pass(hash) {
  const hs = "cb4ebaaedfd536d965c452d9569a6b1e";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5sha1md5pass(hash) {
  const hs = "099b8a59795e07c334a696a10c0ebce0";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5sha1md5sha1pass(hash) {
  const hs = "06e4af76833da7cc138d90602ef80070";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function md5strtouppermd5pass(hash) {
  const hs = "519de146f1a658ab5e5e2aa9b7d2eec8";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function LineageIIC4(hash) {
  const hs = "0x49a57f66bd3d5ba6abda5579c264a0e4";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
    && hash.substring(0, 2).contains("0x") == true
  )
    return true;
  else
    return false;
}
function MD5phpBB3(hash) {
  const hs = "$H$9kyOtE8CDqMJ44yfn9PFz2E.L2oVzL1";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == false
    && hash.substring(0, 3).contains("$H$") == true
  )
    return true;
  else
    return false;
}
function MD5Unix(hash) {
  const hs = "$1$cTuJH0Ju$1J8rI.mJReeMvpKUZbSlY/";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == false
    && hash.substring(0, 3).contains("$1$") == true
  )
    return true;
  else
    return false;
}
function MD5Wordpress(hash) {
  const hs = "$P$BiTOhOj3ukMgCci2juN0HRbCdDRqeh.";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == false
    && hash.substring(0, 3).contains("$P$") == true
  )
    return true;
  else
    return false;
}
function MD5APR(hash) {
  const hs = "$apr1$qAUKoKlG$3LuCncByN76eLxZAh/Ldr1";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && hash.substring(0, 4).contains("$apr") == true
  )
    return true;
  else
    return false;
}
function Haval160(hash) {
  const hs = "a106e921284dd69dad06192a4411ec32fce83dbb";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function Haval160HMAC(hash) {
  const hs = "29206f83edc1d6c3f680ff11276ec20642881243";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function MySQL5(hash) {
  const hs = "9bb2fb57063821c762cc009f7584ddae9da431ff";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function MySQL160bit(hash) {
  const hs = "*2470c0c06dee42fd1618bb99005adca2ec9d1e19";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == false
    && hash.substring(0, 1).contains("*") == true
  )
    return true;
  else
    return false;
}
function RipeMD160(hash) {
  const hs = "dc65552812c66997ea7320ddfb51f5625d74721b";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function RipeMD160HMAC(hash) {
  const hs = "ca28af47653b4f21e96c1235984cb50229331359";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function SHA1(hash) {
  const hs = "4a1d4dbc1e193ec3ab2e9213876ceb8f4db72333";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function SHA1HMAC(hash) {
  const hs = "6f5daac3fee96ba1382a09b1ba326ca73dccf9e7";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function SHA1MaNGOS(hash) {
  const hs = "a2c0cdb6d1ebd1b9f85c6e25e0f8732e88f02f96";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function SHA1MaNGOS2(hash) {
  const hs = "644a29679136e09d0bd99dfd9e8c5be84108b5fd";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function Tiger160(hash) {
  const hs = "c086184486ec6388ff81ec9f235287270429b225";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function Tiger160HMAC(hash) {
  const hs = "6603161719da5e56e1866e4f61f79496334e6a10";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function sha1passsalt(hash) {
  const hs = "f006a1863663c21c541c8d600355abfeeaadb5e4";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function sha1saltpass(hash) {
  const hs = "299c3d65a0dcab1fc38421783d64d0ecf4113448";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function sha1saltmd5pass(hash) {
  const hs = "860465ede0625deebb4fbbedcb0db9dc65faec30";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function sha1saltmd5passsalt(hash) {
  const hs = "6716d047c98c25a9c2cc54ee6134c73e6315a0ff";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function sha1saltsha1pass(hash) {
  const hs = "58714327f9407097c64032a2fd5bff3a260cb85f";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function sha1saltsha1saltsha1pass(hash) {
  const hs = "cc600a2903130c945aa178396910135cc7f93c63";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function sha1usernamepass(hash) {
  const hs = "3de3d8093bf04b8eb5f595bc2da3f37358522c9f";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function sha1usernamepasssalt(hash) {
  const hs = "00025111b3c4d0ac1635558ce2393f77e94770c5";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function sha1md5pass(hash) {
  const hs = "fa960056c0dea57de94776d3759fb555a15cae87";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function sha1md5passsalt(hash) {
  const hs = "1dad2b71432d83312e61d25aeb627593295bcc9a";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function sha1md5sha1pass(hash) {
  const hs = "8bceaeed74c17571c15cdb9494e992db3c263695";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function sha1sha1pass(hash) {
  const hs = "3109b810188fcde0900f9907d2ebcaa10277d10e";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function sha1sha1passsalt(hash) {
  const hs = "780d43fa11693b61875321b6b54905ee488d7760";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function sha1sha1passsubstrpass03(hash) {
  const hs = "5ed6bc680b59c580db4a38df307bd4621759324e";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function sha1sha1saltpass(hash) {
  const hs = "70506bac605485b4143ca114cbd4a3580d76a413";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function sha1sha1sha1pass(hash) {
  const hs = "3328ee2a3b4bf41805bd6aab8e894a992fa91549";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function sha1strtolowerusernamepass(hash) {
  const hs = "79f575543061e158c2da3799f999eb7c95261f07";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function Haval192(hash) {
  const hs = "cd3a90a3bebd3fa6b6797eba5dab8441f16a7dfa96c6e641";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function Haval192HMAC(hash) {
  const hs = "39b4d8ecf70534e2fd86bb04a877d01dbf9387e640366029";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function Tiger192(hash) {
  const hs = "c086184486ec6388ff81ec9f235287270429b2253b248a70";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function Tiger192HMAC(hash) {
  const hs = "8e914bb64353d4d29ab680e693272d0bd38023afa3943a41";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function MD5passsaltjoomla1(hash) {
  const hs = "35d1c0d69a2df62be2df13b087343dc9:BeKMviAfcXeTPTlX";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == false
    && hash.substring(32, 33).contains(":") == true
  )
    return true;
  else
    return false;
}
function SHA1Django(hash) {
  const hs = "sha1$Zion3R$299c3d65a0dcab1fc38421783d64d0ecf4113448";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == false
    && hash.substring(0, 5).contains("sha1$") == true
  )
    return true;
  else
    return false;
}
function Haval224(hash) {
  const hs = "f65d3c0ef6c56f4c74ea884815414c24dbf0195635b550f47eac651a";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function Haval224HMAC(hash) {
  const hs = "f10de2518a9f7aed5cf09b455112114d18487f0c894e349c3c76a681";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function SHA224(hash) {
  const hs = "e301f414993d5ec2bd1d780688d37fe41512f8b57f6923d054ef8e59";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function SHA224HMAC(hash) {
  const hs = "c15ff86a859892b5e95cdfd50af17d05268824a6c9caaa54e4bf1514";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function SHA256(hash) {
  const hs = "2c740d20dab7f14ec30510a11f8fd78b82bc3a711abe8a993acdb323e78e6d5e";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function SHA256HMAC(hash) {
  const hs = "d3dd251b7668b8b6c12e639c681e88f2c9b81105ef41caccb25fcde7673a1132";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function Haval256(hash) {
  const hs = "7169ecae19a5cd729f6e9574228b8b3c91699175324e6222dec569d4281d4a4a";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function Haval256HMAC(hash) {
  const hs = "6aa856a2cfd349fb4ee781749d2d92a1ba2d38866e337a4a1db907654d4d4d7a";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function GOSTR341194(hash) {
  const hs = "ab709d384cce5fda0793becd3da0cb6a926c86a8f3460efb471adddee1c63793";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function RipeMD256(hash) {
  const hs = "5fcbe06df20ce8ee16e92542e591bdea706fbdc2442aecbf42c223f4461a12af";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function RipeMD256HMAC(hash) {
  const hs = "43227322be1b8d743e004c628e0042184f1288f27c13155412f08beeee0e54bf";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function SNEFRU256(hash) {
  const hs = "3a654de48e8d6b669258b2d33fe6fb179356083eed6ff67e27c5ebfa4d9732bb";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function SNEFRU256HMAC(hash) {
  const hs = "4e9418436e301a488f675c9508a2d518d8f8f99e966136f2dd7e308b194d74f9";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function SHA256md5pass(hash) {
  const hs = "b419557099cfa18a86d1d693e2b3b3e979e7a5aba361d9c4ec585a1a70c7bde4";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function SHA256sha1pass(hash) {
  const hs = "afbed6e0c79338dbfe0000efe6b8e74e3b7121fe73c383ae22f5b505cb39c886";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function MD5passsaltjoomla2(hash) {
  const hs = "fb33e01e4f8787dc8beb93dac4107209:fxJUXVjYRafVauT77Cze8XwFrWaeAYB2";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == false
    && hash.substring(32, 33).contains(":") == true
  )
    return true;
  else
    return false;
}
function SAM(hash) {
  const hs = "4318B176C3D8E3DEAAD3B435B51404EE:B7C899154197E8A2A33121D76A240AB5";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == false
    && is_lower(hash) == false
    && hash.substring(32, 33).contains(":") == true
  )
    return true;
  else
    return false;
}
function SHA256Django(hash) {
  const hs = "sha256$Zion3R$9e1a08aa28a22dfff722fad7517bae68a55444bb5e2f909d340767cec9acf2c3";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == false
    && hash.substring(0, 6).contains("sha256") == true
  )
    return true;
  else
    return false;
}
function RipeMD320(hash) {
  const hs =
    "b4f7c8993a389eac4f421b9b3b2bfb3a241d05949324a8dab1286069a18de69aaf5ecc3c2009d8ef";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function RipeMD320HMAC(hash) {
  const hs =
    "244516688f8ad7dd625836c0d0bfc3a888854f7c0161f01de81351f61e98807dcd55b39ffe5d7a78";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function SHA384(hash) {
  const hs = "3b21c44f8d830fa55ee9328a7713c6aad548fe6d7a4a438723a0da67c48c485220081a2fbc3e8c17fd9bd65f8d4b4e6b";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function SHA384HMAC(hash) {
  const hs = "bef0dd791e814d28b4115eb6924a10beb53da47d463171fe8e63f68207521a4171219bb91d0580bca37b0f96fddeeb8b";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function SHA256s(hash) {
  const hs = "$6$g4TpUQzk$OmsZBJFwvy6MwZckPvVYfDnwsgktm2CckOlNJGy9HNwHSuHFvywGIuwkJ6Bjn3kKbB6zoyEjIYNMpHWBNxJ6g.";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == false
    && hash.substring(0, 3).contains("$6$") == true
  )
    return true;
  else
    return false;
}
function SHA384Django(hash) {
  const hs = "sha384$Zion3R$88cfd5bc332a4af9f09aa33a1593f24eddc01de00b84395765193c3887f4deac46dc723ac14ddeb4d3a9b958816b7bba";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == false
    && hash.substring(0, 6).contains("sha384") == true
  )
    return true;
  else
    return false;
}
function SHA512(hash) {
  const hs = "ea8e6f0935b34e2e6573b89c0856c81b831ef2cadfdee9f44eb9aa0955155ba5e8dd97f85c73f030666846773c91404fb0e12fb38936c56f8cf38a33ac89a24e";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function SHA512HMAC(hash) {
  const hs = "dd0ada8693250b31d9f44f3ec2d4a106003a6ce67eaa92e384b356d1b4ef6d66a818d47c1f3a2c6e8a9a9b9bdbd28d485e06161ccd0f528c8bbb5541c3fef36f";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function Whirlpool(hash) {
  const hs = "76df96157e632410998ad7f823d82930f79a96578acc8ac5ce1bfc34346cf64b4610aefa8a549da3f0c1da36dad314927cebf8ca6f3fcd0649d363c5a370dddb";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}
function WhirlpoolHMAC(hash) {
  const hs = "77996016cf6111e97d6ad31484bab1bf7de7b7ee64aebbc243e650a75a2f9256cef104e504d3cf29405888fca5a231fcac85d36cd614b1d52fce850b53ddf7f9";
  if (hash.length == hs.length
    && is_digit(hash) == false
    && is_alpha(hash) == false
    && is_alnum(hash) == true
  )
    return true;
  else
    return false;
}

function is_digit(s) {
  return !/\D/.test(s)
}

function is_alpha(s) {
  return !/[^a-zA-Z]/.test(s)
}

function is_alnum(s) {
  return !/[^a-zA-Z0-9]/.test(s)
}

function is_lower(s) {
  return s === s.toLowerCase()
}

module.exports = {
  CRC16,
  CRC16CCITT,
  FCS16,
  ADLER32,
  CRC32,
  CRC32B,
  XOR32,
  GHash325,
  GHash323,
  DESUnix,
  MySQL,
  MD5Middle,
  MD5Half,
  MD5,
  DomainCachedCredentials,
  RAdminv2x,
  NTLM,
  MD4,
  MD2,
  MD5HMAC,
  MD4HMAC,
  MD2HMAC,
  MD5HMACWordpress,
  Haval128,
  Haval128HMAC,
  RipeMD128,
  RipeMD128HMAC,
  SNEFRU128,
  SNEFRU128HMAC,
  Tiger128,
  Tiger128HMAC,
  md5passsalt,
  md5saltpass,
  md5saltpasssalt,
  md5saltpassusername,
  md5saltmd5pass,
  md5saltmd5passsalt,
  md5saltmd5passsalt1,
  md5saltmd5saltpass2,
  md5saltmd5md5passsalt,
  md5username0pass,
  md5usernameLFpass,
  md5usernamemd5passsalt,
  md5md5pass,
  md5md5passsalt,
  md5md5passmd5salt,
  md5md5saltpass,
  md5md5saltmd5pass,
  md5md5usernamepasssalt,
  md5md5md5pass,
  md5md5md5md5pass,
  md5md5md5md5md5pass,
  md5sha1pass,
  md5sha1md5pass,
  md5sha1md5sha1pass,
  md5strtouppermd5pass,
  MD5Wordpress,
  MD5phpBB3,
  MD5Unix,
  LineageIIC4,
  MD5APR,
  SHA1,
  MySQL5,
  MySQL160bit,
  Tiger160,
  Haval160,
  RipeMD160,
  SHA1HMAC,
  Tiger160HMAC,
  RipeMD160HMAC,
  Haval160HMAC,
  SHA1MaNGOS,
  SHA1MaNGOS2,
  sha1passsalt,
  sha1saltpass,
  sha1saltmd5pass,
  sha1saltmd5passsalt,
  sha1saltsha1pass,
  sha1saltsha1saltsha1pass,
  sha1usernamepass,
  sha1usernamepasssalt,
  sha1md5passsalt,
  sha1md5sha1pass,
  sha1sha1pass,
  sha1sha1passsalt,
  sha1sha1passsubstrpass03,
  sha1sha1saltpass,
  sha1sha1sha1pass,
  sha1strtolowerusernamepass,
  Tiger192,
  Haval192,
  Tiger192HMAC,
  Haval192HMAC,
  MD5passsaltjoomla1,
  SHA1Django,
  SHA224,
  Haval224,
  SHA224HMAC,
  Haval224HMAC,
  SHA256,
  Haval256,
  GOSTR341194,
  RipeMD256,
  SNEFRU256,
  SHA256HMAC,
  Haval256HMAC,
  RipeMD256HMAC,
  SNEFRU256HMAC,
  SHA256md5pass,
  SHA256sha1pass,
  MD5passsaltjoomla2,
  SAM,
  SHA256Django,
  RipeMD320,
  RipeMD320HMAC,
  SHA384,
  SHA384HMAC,
  SHA256s,
  SHA384Django,
  SHA512,
  Whirlpool,
  SHA512HMAC,
  WhirlpoolHMAC,
  sha1md5pass,
}
