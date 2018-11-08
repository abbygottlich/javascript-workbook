"use strict";

let assert = require("assert");

let jobTypes = {
  pilot: "MAV",
  mechanic: "Repair Ship",
  commander: "Main Ship",
  programmer: "Any Ship!"
};

// Your code here
// class #1
// I created a class called CrewMember and gave it the attributes, 'name', 'job', and 'specialSkill'
// I also gave it the 'ship' attribute and set it to null, so we can push whichever ship we want into the class

class CrewMember {
  constructor(name, job, specialSkill, ship) {
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    this.ship = null;
  }
  enterShip(shipName) {
    this.ship = shipName;
    shipName.crew.push(this);
  }
}

// class #2
// I created a new class called 'Ship' and gave it the attributes, 'name', 'type', and 'ability'
// I also gave it the 'crew' attribute and set it to an empty array, so we can push whichever CrewMember we want into the array

class Ship {
  constructor(name, type, ability, crew) {
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];
    this.missionStatement = "";
  }
}

// I created a new instance of a CrewMember and passed in the same values listed in the CrewMember class
// I did not include 'ship' because that is the value we will be assigning later

const crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");

// I created a new instance of a Ship and passed in the same values listed in the Ship class
// I did not include 'crew' because that is the value we will be assigning later

const mav = new Ship("Mars Accent Vehicle", "MAV", "Ascend into low orbit");

//tests
if (typeof describe === "function") {
  describe("CrewMember", function() {
    it("should have a name, a job, a specialSkill and ship upon instantiation", function() {
      var crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
      assert.equal(crewMember1.name, "Rick Martinez");
      assert.equal(crewMember1.job, "pilot");
      assert.equal(crewMember1.specialSkill, "chemistry");
      assert.equal(crewMember1.ship, null);
    });

    it("can enter a ship", function() {
      let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
      let crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe("Ship", function() {
    it("should have a name, a type, an ability and an empty crew upon instantiation", function() {
      let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
      assert.equal(mav.name, "Mars Ascent Vehicle");
      assert.equal(mav.type, "MAV");
      assert.equal(mav.ability, "Ascend into low orbit");
      assert.equal(mav.crew.length, 0);
    });

    it("can return a mission statement correctly", function() {
      //mav is a new instance of a ship (name, type, ability)
      let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
      //crewMember1 is a new instance of a crewMember (name, job, specialSkill)
      let crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
      //hermes is a new instance of a ship (name, type, ability)
      let hermes = new Ship(
        "Hermes",
        "Main Ship",
        "Interplanetary Space Travel"
      );
      //crewMember2 is a new instance of a crewMember (name, job, specialSkill)
      let crewMember2 = new CrewMember(
        "Commander Lewis",
        "commander",
        "geology"
      );
      //possible default statement
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      //if ship is empty, "can't perform mission yet" is the mission statement
      //once crewMember enters ship, ship's ability becomes the missionstatement
      //write a conditional
      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}

// I think this last one will be some sort of conditional
// If a ship doesn't have any crew members in the crew array, return 'Can't perform a mission yet.'
// If they have at least 1 (2?) crew members, return its corresponding mission statement.
