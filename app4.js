//Database Schema dan Application Architecture Diagram untuk sebuah webapp perusahaan yang
//bisa mencari dan menampilkan buku yang tersedia di perpustakaan
var nominal = [100000, 50000, 20000, 10000, 5000, 2000, 1000];
var input = 521000;
for (let i = 0; i < 7; i++) {
  let jml = input / nominal[i];
  input = input - nominal[i] * jml;
  console.log(nominal[i] + "=" + jml);
}
