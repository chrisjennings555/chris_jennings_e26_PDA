heroes = {
  batman: {
    name: "Bruce Wayne",
    weapons: {
      batbelt: 10,
      slingshot: 20
    }
  },
  superman: {
    name: "Clark Kent",
    weapons: {
      fly: 30,
      lasereyes: 100
    }
  }
}

def printBatman(hash)
  p hash
end

printBatman(heroes[:batman])
