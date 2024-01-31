const successMessage = {
  getSuccess: "Berhasil ambil data.",
  saveSuccess: "Data berhasil disimpan.",
  updateSuccess: "Data berhasil diupdate.",
  deleteSuccess: "Data berhasil dhapus.",
};
const errorMessage = {
  getError: "Gagal ambil data.",
  saveError: "Data gagal disimpan.",
  updateError: "Data gagal diupdate.",
  deleteError: "Data gagal dhapus.",
};

const authMessage = {
  successLogin: "Berhasil login",
  failLogin: "Gagal login",
  successRegister: "Berhasil daftar",
  failRegister: "Gagal registrasi, silakan coba lagi",
};

const emailNotVerified = "Email belum terverifikasi";
const emailVerified = "Berhasil verifikasi email";
const cardVerified = "Berhasil verifikasi kartu";
const otpWasSend = "Berhasil kirim OTP";
const notFound = "Data tidak ditemukan";
const wrongOtp = "Otp salah";
const wrongPwd = "Password salah";
const successChangePwd = "Berhasil ubah password";
const payloadLoginWrong = "Username atau password salah";
const cardNotConnected = "Kartu belum terhubung";
const urlNotFound = "URL tidak ditemukan";

const emailWasUsed = "Email sudah digunakan";
const isExist = (field) => {
  return `${field} sudah ada`;
};
const fieldNotFound = (field) => {
  return `${field} tidak ditemukan`;
};
const errorBind = (error) => {
  return `Terjadi error : ${error}`;
};
const fieldRequired = (str) => {
  return `${str} tidak boleh kosong`;
};

module.exports = {
  cardNotConnected,
  successChangePwd,
  wrongPwd,
  isExist,
  urlNotFound,
  cardVerified,
  fieldNotFound,
  otpWasSend,
  emailVerified,
  wrongOtp,
  successMessage,
  errorMessage,
  authMessage,
  fieldRequired,
  notFound,
  errorBind,
  payloadLoginWrong,
  emailWasUsed,
  emailNotVerified,
};
