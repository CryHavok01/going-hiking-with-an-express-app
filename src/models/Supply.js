import fs from 'fs'

const suppliesPath = "supplies.json"

class Supply {
  constructor({ supplyName }) {
    this.supplyName = supplyName
  }

  static findAll() {
    const suppliesData = JSON.parse(fs.readFileSync(suppliesPath)).supplies
    const supplies = suppliesData.map(supply => {
      return new Supply(supply)
    })
    return supplies
  }

  save() {
    const supplies = this.constructor.findAll()
    supplies.push(this)
    fs.writeFileSync(suppliesPath, JSON.stringify({ supplies: supplies }))
  }
}

export default Supply