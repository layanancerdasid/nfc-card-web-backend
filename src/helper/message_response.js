const successMessage = {
    saveSuccess: "Data berhasil disimpan.",
    updateSuccess: "Data berhasil diupdate.",
    deleteSuccess: "Data berhasil dhapus."
}
const errorMessage = {
    saveError: "Data gagal disimpan.",
    updateError: "Data gagal diupdate.",
    deleteError: "Data gagal dhapus."
}

const authMessage = {
    successLogin: "Berhasil login",
    failLogin: "Gagal login",
    successRegister: "Berhasil daftar",
    failRegister: "Gagal registrasi, silakan coba lagi"
}

const emailNotVerified = "Email belum terverifikasi";
const emailVerified = "Berhasil verifikasi email";
const cardVerified = "Berhasil verifikasi kartu";
const otpWasSend = "Berhasil kirim OTP";
const notFound = "Data tidak ditemukan";
const wrongOtp = "Otp salah";
const payloadLoginWrong = "Username atau password salah";
const urlNotFound = "URL tidak ditemukan";

const emailWasUsed = "Email sudah digunakan";

const fieldNotFound = (field) => {
    return `${field} tidak ditemukan`;
}
const errorBind = (error) => {
    return `Terjadi error : ${error}`
}
const fieldRequired = (str) => {
    return `${str} tidak boleh kosong`
}

module.exports = {
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
}
