module.exports = class sort {
  constructor(collection) {
    this.collection = collection
  }

  insertion() {
    let arr = this.collection
    for (let i = 1; i < arr.length; i++) {
      for (let j = i - 1; j >= 0; j--) {
        if (arr[j + 1] > arr[j]) break; // Keluar perulangan
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]] //Pertukaran array dengan destucturing
      }
    }

    return arr
  }

  sort(algorhytm) {
    if (algorhytm === 'insertion') return this.insertion();
  }
}