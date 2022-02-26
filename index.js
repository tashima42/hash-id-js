import * as algorithms from "./algorithms.js";
export default function main(hash) {
  guards(hash)
  return detectAlgorithms(hash)
}

function guards(hash) {
  if (hash === undefined) throw new Error("Hash can't be undefined")
  if (hash === null) throw new Error("Hash can't be null")
  if (typeof hash !== "string") throw new Error("Hash must be a string")
  if (hash.length < 1) throw new Error("Hash must have at least one character")
  if (!hash) throw new Error("Hash is invalid")
}

function detectAlgorithms(hash) {
  const matchedAlgorithms = runAlgorithmsTest(hash);
  const algorithmsDictionary = createAlgorithmsDictionary()

  return matchedAlgorithms.map(algorithm => {
    return algorithmsDictionary[algorithm]
  })
}

function runAlgorithmsTest(hash) {
  const matchAlgorithms = []
  if (algorithms.CRC16(hash)) matchAlgorithms.push(101020);
  if (algorithms.CRC16CCITT(hash)) matchAlgorithms.push(101040);
  if (algorithms.FCS16(hash)) matchAlgorithms.push(101060);
  if (algorithms.ADLER32(hash)) matchAlgorithms.push(102020)
  if (algorithms.CRC32(hash)) matchAlgorithms.push(102040)
  if (algorithms.CRC32B(hash)) matchAlgorithms.push(102060)
  if (algorithms.XOR32(hash)) matchAlgorithms.push(102080)
  if (algorithms.GHash325(hash)) matchAlgorithms.push(103020)
  if (algorithms.GHash323(hash)) matchAlgorithms.push(103040)
  if (algorithms.DESUnix(hash)) matchAlgorithms.push(104020)
  if (algorithms.MySQL(hash)) matchAlgorithms.push(105020)
  if (algorithms.MD5Middle(hash)) matchAlgorithms.push(105040)
  if (algorithms.MD5Half(hash)) matchAlgorithms.push(105060)
  if (algorithms.MD5(hash)) matchAlgorithms.push(106020)
  if (algorithms.DomainCachedCredentials(hash)) matchAlgorithms.push(106025)
  if (algorithms.RAdminv2x(hash)) matchAlgorithms.push(106027)
  if (algorithms.NTLM(hash)) matchAlgorithms.push(106029)
  if (algorithms.MD4(hash)) matchAlgorithms.push(106040)
  if (algorithms.MD2(hash)) matchAlgorithms.push(106060)
  if (algorithms.MD5HMAC(hash)) matchAlgorithms.push(106080)
  if (algorithms.MD4HMAC(hash)) matchAlgorithms.push(106100)
  if (algorithms.MD2HMAC(hash)) matchAlgorithms.push(106120)
  if (algorithms.MD5HMACWordpress(hash)) matchAlgorithms.push(106140)
  if (algorithms.Haval128(hash)) matchAlgorithms.push(106160)
  if (algorithms.Haval128HMAC(hash)) matchAlgorithms.push(106165)
  if (algorithms.RipeMD128(hash)) matchAlgorithms.push(106180)
  if (algorithms.RipeMD128HMAC(hash)) matchAlgorithms.push(106185)
  if (algorithms.SNEFRU128(hash)) matchAlgorithms.push(106200)
  if (algorithms.SNEFRU128HMAC(hash)) matchAlgorithms.push(106205)
  if (algorithms.Tiger128(hash)) matchAlgorithms.push(106220)
  if (algorithms.Tiger128HMAC(hash)) matchAlgorithms.push(106225)
  if (algorithms.md5passsalt(hash)) matchAlgorithms.push(106240)
  if (algorithms.md5saltmd5pass(hash)) matchAlgorithms.push(106260)
  if (algorithms.md5saltpass(hash)) matchAlgorithms.push(106280)
  if (algorithms.md5saltpasssalt(hash)) matchAlgorithms.push(106300)
  if (algorithms.md5saltpassusername(hash)) matchAlgorithms.push(106320)
  if (algorithms.md5saltmd5passsalt(hash)) matchAlgorithms.push(106360)
  if (algorithms.md5saltmd5passsalt1(hash)) matchAlgorithms.push(106380)
  if (algorithms.md5saltmd5saltpass2(hash)) matchAlgorithms.push(106400)
  if (algorithms.md5saltmd5md5passsalt(hash)) matchAlgorithms.push(106420)
  if (algorithms.md5username0pass(hash)) matchAlgorithms.push(106440)
  if (algorithms.md5usernameLFpass(hash)) matchAlgorithms.push(106460)
  if (algorithms.md5usernamemd5passsalt(hash)) matchAlgorithms.push(106480)
  if (algorithms.md5md5pass(hash)) matchAlgorithms.push(106500)
  if (algorithms.md5md5passsalt(hash)) matchAlgorithms.push(106520)
  if (algorithms.md5md5passmd5salt(hash)) matchAlgorithms.push(106540)
  if (algorithms.md5md5saltpass(hash)) matchAlgorithms.push(106560)
  if (algorithms.md5md5saltmd5pass(hash)) matchAlgorithms.push(106580)
  if (algorithms.md5md5usernamepasssalt(hash)) matchAlgorithms.push(106600)
  if (algorithms.md5md5md5pass(hash)) matchAlgorithms.push(106620)
  if (algorithms.md5md5md5md5pass(hash)) matchAlgorithms.push(106640)
  if (algorithms.md5md5md5md5md5pass(hash)) matchAlgorithms.push(106660)
  if (algorithms.md5sha1pass(hash)) matchAlgorithms.push(106680)
  if (algorithms.md5sha1md5pass(hash)) matchAlgorithms.push(106700)
  if (algorithms.md5sha1md5sha1pass(hash)) matchAlgorithms.push(106720)
  if (algorithms.md5strtouppermd5pass(hash)) matchAlgorithms.push(106740)
  if (algorithms.MD5Wordpress(hash)) matchAlgorithms.push(107020)
  if (algorithms.MD5phpBB3(hash)) matchAlgorithms.push(107040)
  if (algorithms.MD5Unix(hash)) matchAlgorithms.push(107060)
  if (algorithms.LineageIIC4(hash)) matchAlgorithms.push(107080)
  if (algorithms.MD5APR(hash)) matchAlgorithms.push(108020)
  if (algorithms.SHA1(hash)) matchAlgorithms.push(109020)
  if (algorithms.MySQL5(hash)) matchAlgorithms.push(109040)
  if (algorithms.MySQL160bit(hash)) matchAlgorithms.push(109060)
  if (algorithms.Tiger160(hash)) matchAlgorithms.push(109080)
  if (algorithms.Haval160(hash)) matchAlgorithms.push(109100)
  if (algorithms.RipeMD160(hash)) matchAlgorithms.push(109120)
  if (algorithms.SHA1HMAC(hash)) matchAlgorithms.push(109140)
  if (algorithms.Tiger160HMAC(hash)) matchAlgorithms.push(109160)
  if (algorithms.RipeMD160HMAC(hash)) matchAlgorithms.push(109180)
  if (algorithms.Haval160HMAC(hash)) matchAlgorithms.push(109200)
  if (algorithms.SHA1MaNGOS(hash)) matchAlgorithms.push(109220)
  if (algorithms.SHA1MaNGOS2(hash)) matchAlgorithms.push(109240)
  if (algorithms.sha1passsalt(hash)) matchAlgorithms.push(109260)
  if (algorithms.sha1saltpass(hash)) matchAlgorithms.push(109280)
  if (algorithms.sha1saltmd5pass(hash)) matchAlgorithms.push(109300)
  if (algorithms.sha1saltmd5passsalt(hash)) matchAlgorithms.push(109320)
  if (algorithms.sha1saltsha1pass(hash)) matchAlgorithms.push(109340)
  if (algorithms.sha1saltsha1saltsha1pass(hash)) matchAlgorithms.push(109360)
  if (algorithms.sha1usernamepass(hash)) matchAlgorithms.push(109380)
  if (algorithms.sha1usernamepasssalt(hash)) matchAlgorithms.push(109400)
  if (algorithms.sha1md5passsalt(hash)) matchAlgorithms.push(109440)
  if (algorithms.sha1md5sha1pass(hash)) matchAlgorithms.push(109460)
  if (algorithms.sha1sha1pass(hash)) matchAlgorithms.push(109480)
  if (algorithms.sha1sha1passsalt(hash)) matchAlgorithms.push(109500)
  if (algorithms.sha1sha1passsubstrpass03(hash)) matchAlgorithms.push(109520)
  if (algorithms.sha1sha1saltpass(hash)) matchAlgorithms.push(109540)
  if (algorithms.sha1sha1sha1pass(hash)) matchAlgorithms.push(109560)
  if (algorithms.sha1strtolowerusernamepass(hash)) matchAlgorithms.push(109580)
  if (algorithms.Tiger192(hash)) matchAlgorithms.push(110020)
  if (algorithms.Haval192(hash)) matchAlgorithms.push(110040)
  if (algorithms.Tiger192HMAC(hash)) matchAlgorithms.push(110060)
  if (algorithms.Haval192HMAC(hash)) matchAlgorithms.push(110080)
  if (algorithms.MD5passsaltjoomla1(hash)) matchAlgorithms.push(112020)
  if (algorithms.SHA1Django(hash)) matchAlgorithms.push(113020)
  if (algorithms.SHA224(hash)) matchAlgorithms.push(114020)
  if (algorithms.Haval224(hash)) matchAlgorithms.push(114040)
  if (algorithms.SHA224HMAC(hash)) matchAlgorithms.push(114060)
  if (algorithms.Haval224HMAC(hash)) matchAlgorithms.push(114080)
  if (algorithms.SHA256(hash)) matchAlgorithms.push(115020)
  if (algorithms.Haval256(hash)) matchAlgorithms.push(115040)
  if (algorithms.GOSTR341194(hash)) matchAlgorithms.push(115060)
  if (algorithms.RipeMD256(hash)) matchAlgorithms.push(115080)
  if (algorithms.SNEFRU256(hash)) matchAlgorithms.push(115100)
  if (algorithms.SHA256HMAC(hash)) matchAlgorithms.push(115120)
  if (algorithms.Haval256HMAC(hash)) matchAlgorithms.push(115140)
  if (algorithms.RipeMD256HMAC(hash)) matchAlgorithms.push(115160)
  if (algorithms.SNEFRU256HMAC(hash)) matchAlgorithms.push(115180)
  if (algorithms.SHA256md5pass(hash)) matchAlgorithms.push(115200)
  if (algorithms.SHA256sha1pass(hash)) matchAlgorithms.push(115220)
  if (algorithms.MD5passsaltjoomla2(hash)) matchAlgorithms.push(116020)
  if (algorithms.SAM(hash)) matchAlgorithms.push(116040)
  if (algorithms.SHA256Django(hash)) matchAlgorithms.push(117020)
  if (algorithms.RipeMD320(hash)) matchAlgorithms.push(118020)
  if (algorithms.RipeMD320HMAC(hash)) matchAlgorithms.push(118040)
  if (algorithms.SHA384(hash)) matchAlgorithms.push(119020)
  if (algorithms.SHA384HMAC(hash)) matchAlgorithms.push(119040)
  if (algorithms.SHA256s(hash)) matchAlgorithms.push(120020)
  if (algorithms.SHA384Django(hash)) matchAlgorithms.push(121020)
  if (algorithms.SHA512(hash)) matchAlgorithms.push(122020)
  if (algorithms.Whirlpool(hash)) matchAlgorithms.push(122040)
  if (algorithms.SHA512HMAC(hash)) matchAlgorithms.push(122060)
  if (algorithms.WhirlpoolHMAC(hash)) matchAlgorithms.push(122080)
  if (algorithms.sha1md5pass(hash)) matchAlgorithms.push(1094202)

  return matchAlgorithms
}


function createAlgorithmsDictionary() {
  return {
    102020: "ADLER-32",
    101020: "CRC-16",
    101040: "CRC-16-CCITT",
    101060: "FCS-16",
    102020: "ADLER-32",
    102040: "CRC-32",
    102060: "CRC-32B",
    102080: "XOR-32",
    103020: "GHash-32-5",
    103040: "GHash-32-3",
    104020: "DES(Unix)",
    105020: "MySQL",
    105040: "MD5(Middle)",
    105060: "MD5(Half)",
    106020: "MD5",
    106025: "Domain Cached Credentials - MD4(MD4(($pass)).(strtolower($username)))",
    106027: "RAdmin v2.x",
    106029: "NTLM",
    106040: "MD4",
    106060: "MD2",
    106080: "MD5(HMAC)",
    106100: "MD4(HMAC)",
    106120: "MD2(HMAC)",
    106140: "MD5(HMAC(Wordpress))",
    106160: "Haval-128",
    106165: "Haval-128(HMAC)",
    106180: "RipeMD-128",
    106185: "RipeMD-128(HMAC)",
    106200: "SNEFRU-128",
    106205: "SNEFRU-128(HMAC)",
    106220: "Tiger-128",
    106225: "Tiger-128(HMAC)",
    106240: "md5($pass.$salt)",
    106260: "md5($salt.'-'.md5($pass))",
    106280: "md5($salt.$pass)",
    106300: "md5($salt.$pass.$salt)",
    106320: "md5($salt.$pass.$username)",
    106360: "md5($salt.md5($pass).$salt)",
    106380: "md5($salt.md5($pass.$salt))",
    106400: "md5($salt.md5($salt.$pass))",
    106420: "md5($salt.md5(md5($pass).$salt))",
    106440: "md5($username.0.$pass)",
    106460: "md5($username.LF.$pass)",
    106480: "md5($username.md5($pass).$salt)",
    106500: "md5(md5($pass))",
    106520: "md5(md5($pass).$salt)",
    106540: "md5(md5($pass).md5($salt))",
    106560: "md5(md5($salt).$pass)",
    106580: "md5(md5($salt).md5($pass))",
    106600: "md5(md5($username.$pass).$salt)",
    106620: "md5(md5(md5($pass)))",
    106640: "md5(md5(md5(md5($pass))))",
    106660: "md5(md5(md5(md5(md5($pass)))))",
    106680: "md5(sha1($pass))",
    106700: "md5(sha1(md5($pass)))",
    106720: "md5(sha1(md5(sha1($pass))))",
    106740: "md5(strtoupper(md5($pass)))",
    107020: "MD5(Wordpress)",
    107040: "MD5(phpBB3)",
    107060: "MD5(Unix)",
    107080: "Lineage II C4",
    108020: "MD5(APR)",
    109020: "SHA-1",
    109040: "MySQL5 - SHA-1(SHA-1($pass))",
    109060: "MySQL 160bit - SHA-1(SHA-1($pass))",
    109080: "Tiger-160",
    109100: "Haval-160",
    109120: "RipeMD-160",
    109140: "SHA-1(HMAC)",
    109160: "Tiger-160(HMAC)",
    109180: "RipeMD-160(HMAC)",
    109200: "Haval-160(HMAC)",
    109220: "SHA-1(MaNGOS)",
    109240: "SHA-1(MaNGOS2)",
    109260: "sha1($pass.$salt)",
    109280: "sha1($salt.$pass)",
    109300: "sha1($salt.md5($pass))",
    109320: "sha1($salt.md5($pass).$salt)",
    109340: "sha1($salt.sha1($pass))",
    109360: "sha1($salt.sha1($salt.sha1($pass)))",
    109380: "sha1($username.$pass)",
    109400: "sha1($username.$pass.$salt)",
    109440: "sha1(md5($pass).$salt)",
    109460: "sha1(md5(sha1($pass)))",
    109480: "sha1(sha1($pass))",
    109500: "sha1(sha1($pass).$salt)",
    109520: "sha1(sha1($pass).substr($pass,0,3))",
    109540: "sha1(sha1($salt.$pass))",
    109560: "sha1(sha1(sha1($pass)))",
    109580: "sha1(strtolower($username).$pass)",
    110020: "Tiger-192",
    110040: "Haval-192",
    110060: "Tiger-192(HMAC)",
    110080: "Haval-192(HMAC)",
    112020: "md5($pass.$salt) - Joomla",
    113020: "SHA-1(Django)",
    114020: "SHA-224",
    114040: "Haval-224",
    114060: "SHA-224(HMAC)",
    114080: "Haval-224(HMAC)",
    115020: "SHA-256",
    115040: "Haval-256",
    115060: "GOST R 34.11-94",
    115080: "RipeMD-256",
    115100: "SNEFRU-256",
    115120: "SHA-256(HMAC)",
    115140: "Haval-256(HMAC)",
    115160: "RipeMD-256(HMAC)",
    115180: "SNEFRU-256(HMAC)",
    115200: "SHA-256(md5($pass))",
    115220: "SHA-256(sha1($pass))",
    116020: "md5($pass.$salt) - Joomla",
    116040: "SAM - (LM_hash:NT_hash))",
    117020: "SHA-256(Django)",
    118020: "RipeMD-320",
    118040: "RipeMD-320(HMAC)",
    119020: "SHA-384",
    119040: "SHA-384(HMAC)",
    120020: "SHA-256",
    121020: "SHA-384(Django)",
    122020: "SHA-512",
    122040: "Whirlpool",
    122060: "SHA-512(HMAC)",
    122080: "Whirlpool(HMAC)",
    1094202: "sha1(md5($pass))",
  }
}