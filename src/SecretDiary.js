//const DiaryEntry = require('./DiaryEntry.js')

class SecretDiary {
    constructor() {
        this.locked = true
        this.entries = []
    } 

    lock() {
        this.locked = true
    }

    unlock() {
        this.locked = false
    }

    addEntry(entry) {
        if (this.locked === false) {
            //const diaryEntry = new DiaryEntry(date, entry)
            this.entries.push(entry)
            return true
        }
        return 'error'
    }
    getEntries() {
        if (this.locked === false) {
            return this.entries
        }
        return 'error'
    }
}

const secretDiary = new SecretDiary()

console.log(secretDiary.ul)

module.exports = SecretDiary