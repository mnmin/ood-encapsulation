const DiaryEntry = require('../src/DiaryEntry.js')
const SecretDiary = require('../src/SecretDiary.js')
describe('SecretDiary', () => {

  let secretDiary
  beforeEach(() => {
    secretDiary = new SecretDiary()
  })

  it('can add entry to the diary', () => {
    // setup
    const expected = true
    secretDiary.unlock()
    // execute
    const result = secretDiary.addEntry('ciao') // should be true
    // verify
    expect(result).toEqual(expected)
    expect(secretDiary.entries).toEqual(['ciao'])
  })

  it('cannot add entry to locked diary', () => {
    // setup
    const expected = 'error'
    secretDiary.lock()
    // execute
    const result = secretDiary.addEntry('hi') // should be true
    // verify
    expect(result).toEqual(expected)
    expect(secretDiary.entries).toEqual([])
  })

  fit('can get a diary entry', () => {
    // setup
    const expected = secretDiary.addEntry('hi')    
    // execute
    const result = secretDiary.getEntries([])
    // verify
    expected(result).toEqual(expected)
})

  it('can lock diary access', () => {
    // setup
    const expected = true
    secretDiary.lock()
    // execute
    const result = secretDiary.lock()
    // verify
    expect(result).toEqual(expected)
  })

  it('can unlock diary access', () => {
})



})