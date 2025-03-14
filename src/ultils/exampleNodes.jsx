// Feb 26th Colin AI generated result:
const Feb26_Colin_sample_story = {
  title: "The Stormy Night Hotel",
  startNode: "node_01",
  characters: {
    character_01: {
      name: "Evelyn Harper",
      appearance:
        "A woman in her late 30s with shoulder-length auburn hair, piercing green eyes, and a faint scar on her left cheek. She wears a dark trench coat, a white blouse, and black trousers, with a silver pendant shaped like a crescent moon around her neck.",
      background:
        "Evelyn is a private investigator with a knack for solving mysterious cases. She has a troubled past, having lost her family in a tragic accident, which drives her to uncover the truth behind unexplained phenomena.",
    },
    character_02: {
      name: "Victor Blackwood",
      appearance:
        "A tall, imposing man in his early 50s with slicked-back black hair, a neatly trimmed beard, and cold, calculating blue eyes. He wears a tailored black suit with a red tie and carries a silver cane with a wolf's head handle.",
      background:
        "Victor is the enigmatic owner of the Blackwood Hotel. Rumors swirl around him, suggesting he has connections to the occult and has been alive for centuries, maintaining the hotel as a gateway to other realms.",
    },
  },
  nodes: {
    node_01: {
      id: "node_01",
      sceneDescription:
        "The storm rages outside as you drive along a desolate highway. The rain pounds against your windshield, and the wind howls like a banshee. Your navigation system suddenly reroutes you, directing you to a hotel you've never seen before. The sign reads 'Blackwood Hotel,' illuminated by a flickering neon light.",
      imagePrompt:
        "A dark, stormy night with heavy rain and lightning illuminating a desolate highway. A vintage car drives towards a gothic-style hotel with a flickering neon sign that reads 'Blackwood Hotel.' The hotel is surrounded by dense, ominous trees, and the atmosphere is eerie and foreboding.",
      dialogues: [
        {
          speaker: "Navigation System",
          text: "Recalculating route. Turn left in 500 meters to reach Blackwood Hotel.",
        },
        {
          speaker: "Evelyn Harper",
          text: "Blackwood Hotel? I've never heard of it. But with this storm, I don't have much choice.",
        },
        {
          speaker: "Evelyn Harper",
          text: "The rain's coming down so hard, I can barely see the road. This storm feels... unnatural.",
        },
        {
          speaker: "Evelyn Harper",
          text: "I hope this hotel has a vacancy. I can't keep driving in this weather.",
        },
        {
          speaker: "Evelyn Harper",
          text: "Something about this place... it feels like it's calling to me. Or maybe I'm just too tired.",
        },
      ],
      choices: [
        {
          text: "Follow the navigation and head to the hotel",
          nextNode: "node_02",
        },
        {
          text: "Ignore the navigation and keep driving",
          nextNode: "node_03",
        },
      ],
      next: null,
    },
    node_02: {
      id: "node_02",
      sceneDescription:
        "You pull into the hotel's parking lot, the rain still pouring heavily. The hotel looms before you, its gothic architecture casting long shadows in the dim light. The entrance is adorned with intricate carvings of mythical creatures, and the air feels heavy with an unspoken history.",
      imagePrompt:
        "A gothic-style hotel with towering spires and intricate carvings of mythical creatures on the entrance. The parking lot is empty except for your car, and the rain continues to pour heavily. The atmosphere is dark and mysterious, with faint light coming from the hotel's windows.",
      dialogues: [
        {
          speaker: "Evelyn Harper",
          text: "This place gives me the creeps, but I need to get out of this storm.",
        },
        {
          speaker: "Evelyn Harper",
          text: "The architecture... it's like something out of a gothic novel. Who builds a hotel like this?",
        },
        {
          speaker: "Victor Blackwood",
          text: "Welcome to the Blackwood Hotel. I trust you'll find your stay... enlightening.",
        },
        {
          speaker: "Evelyn Harper",
          text: "Enlightening? That's an odd choice of words. What exactly do you mean by that?",
        },
        {
          speaker: "Victor Blackwood",
          text: "Let's just say, our guests often leave with more than they came with. Knowledge, experiences... sometimes even more.",
        },
        {
          speaker: "Evelyn Harper",
          text: "That sounds... ominous. But I suppose I don't have much choice tonight.",
        },
      ],
      choices: [
        {
          text: "Ask Victor about the hotel's history",
          nextNode: "node_04",
        },
        {
          text: "Request a room and head upstairs",
          nextNode: "node_05",
        },
      ],
      next: null,
    },
    node_03: {
      id: "node_03",
      sceneDescription:
        "You decide to ignore the navigation and continue driving. The storm grows worse, and visibility drops to almost zero. Suddenly, your car skids on the wet road, and you lose control, crashing into a tree. The last thing you see is the faint glow of the Blackwood Hotel in the distance.",
      imagePrompt:
        "A car crash scene in the middle of a stormy night. The car is smashed against a tree, with rain pouring down and lightning illuminating the scene. In the distance, the faint glow of the Blackwood Hotel can be seen, adding to the eerie atmosphere.",
      dialogues: [
        {
          speaker: "Evelyn Harper",
          text: "No... this can't be happening...",
        },
        {
          speaker: "Evelyn Harper",
          text: "The storm... it's too much. I can't see anything!",
        },
        {
          speaker: "Evelyn Harper",
          text: "I need to stay calm. Think, Evelyn, think!",
        },
        {
          speaker: "Evelyn Harper",
          text: "The car... it's skidding! I can't control it!",
        },
        {
          speaker: "Evelyn Harper",
          text: "No! NO!",
        },
      ],
      choices: [],
      next: null,
    },
    node_04: {
      id: "node_04",
      sceneDescription:
        "Victor leads you to a grand sitting room filled with antique furniture and strange artifacts. The fire in the hearth casts flickering shadows on the walls, and the air is thick with the scent of old books and incense.",
      imagePrompt:
        "A grand sitting room with antique furniture, strange artifacts, and a roaring fire in the hearth. The walls are lined with old books, and the atmosphere is warm yet mysterious. Victor stands by the fire, his expression unreadable.",
      dialogues: [
        {
          speaker: "Evelyn Harper",
          text: "This place is fascinating. How long has the hotel been here?",
        },
        {
          speaker: "Victor Blackwood",
          text: "The Blackwood Hotel has stood for centuries, a sanctuary for those who seek... something beyond the ordinary.",
        },
        {
          speaker: "Evelyn Harper",
          text: "Centuries? That's impressive. It must have seen a lot of history.",
        },
        {
          speaker: "Victor Blackwood",
          text: "Indeed. Many have passed through these halls, each leaving their mark in one way or another.",
        },
        {
          speaker: "Evelyn Harper",
          text: "And what about you? How long have you been here?",
        },
        {
          speaker: "Victor Blackwood",
          text: "Long enough to know that time is... fluid. But that's a conversation for another time.",
        },
      ],
      choices: [
        {
          text: "Press Victor for more information",
          nextNode: "node_06",
        },
        {
          text: "Excuse yourself and explore the hotel",
          nextNode: "node_07",
        },
      ],
      next: null,
    },
    node_05: {
      id: "node_05",
      sceneDescription:
        "Victor hands you a key and directs you to your room on the second floor. The hallway is dimly lit, with old portraits lining the walls. The air is cold, and you can hear faint whispers as you walk towards your room.",
      imagePrompt:
        "A dimly lit hallway in the Blackwood Hotel, with old portraits lining the walls. The air is cold, and faint whispers can be heard. Evelyn holds a key, walking towards her room, the atmosphere tense and eerie.",
      dialogues: [
        {
          speaker: "Victor Blackwood",
          text: "Room 213. I hope you find it... comfortable.",
        },
        {
          speaker: "Evelyn Harper",
          text: "Thank you. I'll see you in the morning.",
        },
        {
          speaker: "Victor Blackwood",
          text: "Sleep well, Miss Harper. The night can be... restless here.",
        },
        {
          speaker: "Evelyn Harper",
          text: "Restless? What do you mean by that?",
        },
        {
          speaker: "Victor Blackwood",
          text: "Let's just say, the hotel has a way of revealing things to those who are open to them.",
        },
        {
          speaker: "Evelyn Harper",
          text: "I'll keep that in mind. Goodnight, Mr. Blackwood.",
        },
      ],
      choices: [
        {
          text: "Enter the room and rest",
          nextNode: "node_08",
        },
        {
          text: "Explore the hallway further",
          nextNode: "node_09",
        },
      ],
      next: null,
    },
    node_06: {
      id: "node_06",
      sceneDescription:
        "Victor's expression darkens as you press him for more information. He leans in closer, his voice dropping to a whisper.",
      imagePrompt:
        "Victor Blackwood leaning in close to Evelyn, his expression dark and serious. The firelight casts shadows on his face, and the atmosphere is tense and foreboding.",
      dialogues: [
        {
          speaker: "Victor Blackwood",
          text: "Some secrets are best left buried. But if you insist on knowing, be prepared for the consequences.",
        },
        {
          speaker: "Evelyn Harper",
          text: "Consequences? What are you hiding, Victor?",
        },
        {
          speaker: "Victor Blackwood",
          text: "The truth is not always kind, Evelyn. Are you sure you're ready to face it?",
        },
        {
          speaker: "Evelyn Harper",
          text: "I've faced worse. I need to know what's going on here.",
        },
        {
          speaker: "Victor Blackwood",
          text: "Very well. But remember, once you see, you can never unsee.",
        },
      ],
      choices: [
        {
          text: "Continue pressing for answers",
          nextNode: "node_10",
        },
        {
          text: "Back off and change the subject",
          nextNode: "node_11",
        },
      ],
      next: null,
    },
    node_07: {
      id: "node_07",
      sceneDescription:
        "You excuse yourself and begin exploring the hotel. The corridors are labyrinthine, and you soon find yourself lost. The air grows colder, and you hear faint footsteps behind you.",
      imagePrompt:
        "A labyrinthine corridor in the Blackwood Hotel, with dim lighting and cold air. Evelyn looks around nervously, hearing faint footsteps behind her. The atmosphere is tense and unsettling.",
      dialogues: [
        {
          speaker: "Evelyn Harper",
          text: "This place is like a maze. I need to find my way back...",
        },
        {
          speaker: "Evelyn Harper",
          text: "The corridors... they keep shifting. Am I going in circles?",
        },
        {
          speaker: "Evelyn Harper",
          text: "I can hear footsteps... but there's no one here. What is this place?",
        },
        {
          speaker: "Evelyn Harper",
          text: "I need to stay calm. Panicking won't help me find my way.",
        },
        {
          speaker: "Evelyn Harper",
          text: "There's something about this hotel... it's like it's alive.",
        },
      ],
      choices: [
        {
          text: "Try to retrace your steps",
          nextNode: "node_12",
        },
        {
          text: "Follow the footsteps",
          nextNode: "node_13",
        },
      ],
      next: null,
    },
    node_08: {
      id: "node_08",
      sceneDescription:
        "You enter your room and lock the door behind you. The room is elegantly furnished, but something feels off. The mirror on the wall seems to reflect something that isn't there, and the air is heavy with an unnatural stillness.",
      imagePrompt:
        "An elegantly furnished hotel room with a large mirror on the wall. The reflection in the mirror seems distorted, showing something that isn't there. The air is heavy and still, and the atmosphere is unsettling.",
      dialogues: [
        {
          speaker: "Evelyn Harper",
          text: "This room... it feels like I'm being watched.",
        },
        {
          speaker: "Evelyn Harper",
          text: "The mirror... why does it feel like it's looking back at me?",
        },
        {
          speaker: "Evelyn Harper",
          text: "I need to stay focused. This is just a room, nothing more.",
        },
        {
          speaker: "Evelyn Harper",
          text: "But why does the air feel so heavy? Like something's waiting...",
        },
        {
          speaker: "Evelyn Harper",
          text: "I can't shake this feeling. Something's not right here.",
        },
      ],
      choices: [
        {
          text: "Investigate the mirror",
          nextNode: "node_14",
        },
        {
          text: "Try to sleep and ignore the feeling",
          nextNode: "node_15",
        },
      ],
      next: null,
    },
    node_09: {
      id: "node_09",
      sceneDescription:
        "You decide to explore the hallway further. The whispers grow louder, and you notice a door slightly ajar at the end of the corridor. A faint light spills out from within.",
      imagePrompt:
        "A dimly lit hallway with a door slightly ajar at the end. Faint light spills out from within, and the whispers grow louder. Evelyn hesitates, the atmosphere tense and mysterious.",
      dialogues: [
        {
          speaker: "Evelyn Harper",
          text: "What's in there? I need to find out...",
        },
        {
          speaker: "Evelyn Harper",
          text: "The whispers... they're coming from that room. What could be inside?",
        },
        {
          speaker: "Evelyn Harper",
          text: "I need to be careful. This place is full of surprises.",
        },
        {
          speaker: "Evelyn Harper",
          text: "But I can't ignore it. I need to know what's going on.",
        },
        {
          speaker: "Evelyn Harper",
          text: "Here goes nothing...",
        },
      ],
      choices: [
        {
          text: "Enter the room",
          nextNode: "node_16",
        },
        {
          text: "Turn back and return to your room",
          nextNode: "node_17",
        },
      ],
      next: null,
    },
    node_10: {
      id: "node_10",
      sceneDescription:
        "Victor's eyes narrow as you continue to press him. He stands abruptly, his cane tapping ominously on the floor.",
      imagePrompt:
        "Victor Blackwood standing abruptly, his cane tapping ominously on the floor. His eyes narrow as he looks at Evelyn, the atmosphere tense and threatening.",
      dialogues: [
        {
          speaker: "Victor Blackwood",
          text: "You should have heeded my warning. Now, you will see the true nature of the Blackwood Hotel.",
        },
        {
          speaker: "Evelyn Harper",
          text: "What are you talking about? What's going on here?",
        },
        {
          speaker: "Victor Blackwood",
          text: "The hotel is more than it seems, Evelyn. It's a gateway, a threshold to something... other.",
        },
        {
          speaker: "Evelyn Harper",
          text: "A gateway? To what? What are you hiding?",
        },
        {
          speaker: "Victor Blackwood",
          text: "You'll see soon enough. The hotel has chosen you, Evelyn. There's no turning back now.",
        },
      ],
      choices: [],
      next: "node_18",
    },
    node_11: {
      id: "node_11",
      sceneDescription:
        "You decide to back off and change the subject. Victor's demeanor softens slightly, and he offers you a drink.",
      imagePrompt:
        "Victor Blackwood offering Evelyn a drink, his demeanor softening slightly. The firelight casts a warm glow on the scene, but the atmosphere remains mysterious.",
      dialogues: [
        {
          speaker: "Victor Blackwood",
          text: "Perhaps it's best to leave some mysteries unsolved. Would you care for a drink?",
        },
        {
          speaker: "Evelyn Harper",
          text: "A drink sounds good. Maybe it'll help me forget... whatever this is.",
        },
        {
          speaker: "Victor Blackwood",
          text: "Sometimes, ignorance is bliss. But I sense you're not one to shy away from the truth.",
        },
        {
          speaker: "Evelyn Harper",
          text: "You're right about that. But maybe, just for tonight, I'll let it rest.",
        },
        {
          speaker: "Victor Blackwood",
          text: "A wise choice. The night is long, and there's much to ponder.",
        },
      ],
      choices: [
        {
          text: "Accept the drink",
          nextNode: "node_19",
        },
        {
          text: "Decline and excuse yourself",
          nextNode: "node_20",
        },
      ],
      next: null,
    },
    node_12: {
      id: "node_12",
      sceneDescription:
        "You try to retrace your steps, but the corridors seem to shift and change around you. The whispers grow louder, and you realize you're not alone.",
      imagePrompt:
        "A shifting, labyrinthine corridor in the Blackwood Hotel. The walls seem to move, and the whispers grow louder. Evelyn looks around nervously, realizing she's not alone.",
      dialogues: [
        {
          speaker: "Evelyn Harper",
          text: "This can't be real... I need to find a way out!",
        },
        {
          speaker: "Evelyn Harper",
          text: "The corridors... they keep changing. It's like the hotel is alive.",
        },
        {
          speaker: "Evelyn Harper",
          text: "I can hear the whispers... they're getting louder. What do they want?",
        },
        {
          speaker: "Evelyn Harper",
          text: "I need to stay calm. Panicking won't help me find the exit.",
        },
        {
          speaker: "Evelyn Harper",
          text: "There has to be a way out... I just need to find it.",
        },
      ],
      choices: [],
      next: "node_18",
    },
    node_13: {
      id: "node_13",
      sceneDescription:
        "You follow the footsteps, which lead you to a hidden staircase descending into darkness. The air grows colder, and you feel a sense of dread as you descend.",
      imagePrompt:
        "A hidden staircase descending into darkness, with cold air and a sense of dread. Evelyn hesitates at the top, the atmosphere tense and foreboding.",
      dialogues: [
        {
          speaker: "Evelyn Harper",
          text: "What's down there? I need to know...",
        },
        {
          speaker: "Evelyn Harper",
          text: "The air... it's so cold. What could be waiting at the bottom?",
        },
        {
          speaker: "Evelyn Harper",
          text: "I can feel it... something's calling me. I need to see what it is.",
        },
        {
          speaker: "Evelyn Harper",
          text: "This is crazy... but I can't turn back now.",
        },
        {
          speaker: "Evelyn Harper",
          text: "Here goes nothing...",
        },
      ],
      choices: [
        {
          text: "Descend the staircase",
          nextNode: "node_18",
        },
        {
          text: "Turn back and return to your room",
          nextNode: "node_17",
        },
      ],
      next: null,
    },
    node_14: {
      id: "node_14",
      sceneDescription:
        "You approach the mirror, and as you do, the reflection begins to change. The image of the room distorts, and you see a figure standing behind you in the reflection.",
      imagePrompt:
        "A large mirror in a hotel room, with the reflection distorting and showing a figure standing behind Evelyn. The atmosphere is eerie and unsettling, with the air heavy and still.",
      dialogues: [
        {
          speaker: "Evelyn Harper",
          text: "Who's there? Show yourself!",
        },
        {
          speaker: "Evelyn Harper",
          text: "The mirror... it's changing. What's happening?",
        },
        {
          speaker: "Evelyn Harper",
          text: "I can see something... someone. Who are you?",
        },
        {
          speaker: "Evelyn Harper",
          text: "This can't be real... but it feels so real.",
        },
        {
          speaker: "Evelyn Harper",
          text: "What do you want from me?",
        },
      ],
      choices: [],
      next: "node_18",
    },
    node_15: {
      id: "node_15",
      sceneDescription:
        "You try to ignore the feeling and lie down on the bed. As you close your eyes, you hear a faint whisper in your ear, and the room grows colder.",
      imagePrompt:
        "Evelyn lying on a bed in the hotel room, with the room growing colder and a faint whisper in her ear. The atmosphere is tense and unsettling, with the air heavy and still.",
      dialogues: [
        {
          speaker: "Evelyn Harper",
          text: "This can't be real... I need to wake up...",
        },
        {
          speaker: "Evelyn Harper",
          text: "The whispers... they're in my head. What are they saying?",
        },
        {
          speaker: "Evelyn Harper",
          text: "The room... it's so cold. Why can't I move?",
        },
        {
          speaker: "Evelyn Harper",
          text: "I need to wake up... I need to get out of here.",
        },
        {
          speaker: "Evelyn Harper",
          text: "Please... let this be a dream...",
        },
      ],
      choices: [],
      next: "node_18",
    },
    node_16: {
      id: "node_16",
      sceneDescription:
        "You push the door open and step inside. The room is filled with strange artifacts and old books. In the center of the room, a large, ancient tome lies open on a pedestal.",
      imagePrompt:
        "A room filled with strange artifacts and old books, with a large, ancient tome lying open on a pedestal in the center. The atmosphere is mysterious and foreboding, with faint light coming from the tome.",
      dialogues: [
        {
          speaker: "Evelyn Harper",
          text: "What is this place? That book... it feels... alive.",
        },
        {
          speaker: "Evelyn Harper",
          text: "The artifacts... they're ancient. What kind of power do they hold?",
        },
        {
          speaker: "Evelyn Harper",
          text: "I need to be careful. This room feels... dangerous.",
        },
        {
          speaker: "Evelyn Harper",
          text: "But I can't ignore it. I need to know what's in that book.",
        },
        {
          speaker: "Evelyn Harper",
          text: "Here goes nothing...",
        },
      ],
      choices: [
        {
          text: "Read the tome",
          nextNode: "node_18",
        },
        {
          text: "Leave the room immediately",
          nextNode: "node_17",
        },
      ],
      next: null,
    },
    node_17: {
      id: "node_17",
      sceneDescription:
        "You decide to leave the room and return to your own. As you walk back, the whispers fade, and the air grows warmer. You feel a sense of relief, but the mystery of the hotel remains.",
      imagePrompt:
        "Evelyn walking back to her room, with the whispers fading and the air growing warmer. The atmosphere is still mysterious, but there's a sense of relief as she returns to her room.",
      dialogues: [
        {
          speaker: "Evelyn Harper",
          text: "I need to get out of here... but how?",
        },
        {
          speaker: "Evelyn Harper",
          text: "The whispers... they're fading. Maybe I'm safe for now.",
        },
        {
          speaker: "Evelyn Harper",
          text: "But the mystery... it's still here. I can't just leave without answers.",
        },
        {
          speaker: "Evelyn Harper",
          text: "I need to find a way out... but I also need to know the truth.",
        },
        {
          speaker: "Evelyn Harper",
          text: "What am I going to do?",
        },
      ],
      choices: [],
      next: "node_18",
    },
    node_18: {
      id: "node_18",
      sceneDescription:
        "You find yourself in a grand hall, the walls lined with portraits of people who seem to be watching you. Victor stands at the far end, his expression unreadable. The air is thick with tension, and you realize you've stumbled upon the heart of the hotel's mystery.",
      imagePrompt:
        "A grand hall with walls lined with portraits of people who seem to be watching. Victor Blackwood stands at the far end, his expression unreadable. The atmosphere is tense and foreboding, with the air thick with tension.",
      dialogues: [
        {
          speaker: "Victor Blackwood",
          text: "You've come far, Evelyn. But now, you must make a choice. Will you embrace the truth, or will you flee like the others?",
        },
        {
          speaker: "Evelyn Harper",
          text: "What truth? What are you hiding, Victor?",
        },
        {
          speaker: "Victor Blackwood",
          text: "The hotel is more than a building, Evelyn. It's a gateway, a threshold to another realm.",
        },
        {
          speaker: "Evelyn Harper",
          text: "Another realm? What are you talking about?",
        },
        {
          speaker: "Victor Blackwood",
          text: "The choice is yours, Evelyn. Embrace it, or leave and never return.",
        },
      ],
      choices: [
        {
          text: "Embrace the truth",
          nextNode: "node_19",
        },
        {
          text: "Flee the hotel",
          nextNode: "node_20",
        },
      ],
      next: null,
    },
    node_19: {
      id: "node_19",
      sceneDescription:
        "You choose to embrace the truth, and Victor reveals the hotel's dark secret. The hotel is a gateway to another realm, and you are now bound to it. The portraits on the walls come to life, and you realize you are no longer alone.",
      imagePrompt:
        "Victor Blackwood revealing the hotel's dark secret, with the portraits on the walls coming to life. Evelyn stands in the grand hall, realizing she is now bound to the hotel. The atmosphere is dark and foreboding, with the air thick with tension.",
      dialogues: [
        {
          speaker: "Victor Blackwood",
          text: "Welcome to the Blackwood Hotel, Evelyn. You are now one of us.",
        },
        {
          speaker: "Evelyn Harper",
          text: "One of you? What do you mean?",
        },
        {
          speaker: "Victor Blackwood",
          text: "The hotel has chosen you, Evelyn. You are now bound to it, as we all are.",
        },
        {
          speaker: "Evelyn Harper",
          text: "Bound? What does that mean? What have you done to me?",
        },
        {
          speaker: "Victor Blackwood",
          text: "You'll understand in time. For now, welcome to your new home.",
        },
      ],
      choices: [],
      next: null,
    },
    node_20: {
      id: "node_20",
      sceneDescription:
        "You choose to flee the hotel, running through the corridors as the walls seem to close in around you. You burst through the front door and into the storm, the hotel disappearing behind you as if it never existed.",
      imagePrompt:
        "Evelyn running through the corridors of the Blackwood Hotel, with the walls closing in around her. She bursts through the front door and into the storm, the hotel disappearing behind her. The atmosphere is tense and chaotic, with the storm raging outside.",
      dialogues: [
        {
          speaker: "Evelyn Harper",
          text: "I made it out... but I'll never forget what I saw.",
        },
        {
          speaker: "Evelyn Harper",
          text: "The hotel... it's gone. Like it was never there.",
        },
        {
          speaker: "Evelyn Harper",
          text: "But I know it was real. I can still feel it... calling to me.",
        },
        {
          speaker: "Evelyn Harper",
          text: "I need to find out more. I can't just let this go.",
        },
        {
          speaker: "Evelyn Harper",
          text: "But for now... I need to get as far away from here as I can.",
        },
      ],
      choices: [],
      next: null,
    },
  },
};

// Feb 27 Sheng Rong AI generated story:
const Feb27_ShengRong_sample_story = [
        {
          "id": "node_01",
          "sceneDescription": "The Orient Express is trapped in a snowdrift. Hercule Poirot has been asked to investigate the murder of Mr. Ratchett, who was found stabbed multiple times in his locked compartment.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "A meticulous Belgian detective with an egg-shaped head and impressive mustache, dressed impeccably despite the circumstances"
            },
            {
              "name": "Monsieur Bouc",
              "appearance": "The anxious director of the train company, pacing nervously in the dining car"
            }
          ],
          "dialogs": [
            {
              "from": "Monsieur Bouc",
              "content": "Mon cher Poirot, this is a disaster! A murder on my train! I implore you to take on this case. We are isolated by the snow - the murderer must still be on board."
            },
            {
              "from": "Hercule Poirot",
              "content": "Very well, my friend. I shall need to examine the body and the crime scene first, then interview each passenger. This is most irregular, but the circumstances demand it."
            }
          ],
          "choices": [
            {
              "label": "Examine Ratchett's body and compartment first",
              "nextNodeId": "node_02"
            },
            {
              "label": "Begin interviewing passengers immediately",
              "comment": "Starting interviews without examining the crime scene will make the hero miss critical physical evidence",
              "nextNodeId": "node_03"
            }
          ]
        },
        {
          "id": "node_02",
          "sceneDescription": "Poirot examines Ratchett's compartment meticulously. The body has multiple stab wounds of varying depths. The door was locked from the inside. A handkerchief with an 'H' monogram, a pipe cleaner, and a burnt paper fragment with the word 'Armstrong' are found.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Carefully examining the crime scene, his green eyes missing nothing"
            },
            {
              "name": "Dr. Constantine",
              "appearance": "The train's doctor, assisting with the examination of the body"
            }
          ],
          "dialogs": [
            {
              "from": "Dr. Constantine",
              "content": "Some of these wounds are deep, others merely superficial. And strangest of all, some appear to have been inflicted by a right-handed person, others by someone left-handed."
            },
            {
              "from": "Hercule Poirot",
              "content": "Most curious indeed. And this paper fragment with 'Armstrong'... it awakens a memory. There was a case some years ago involving the kidnapping and murder of a child named Daisy Armstrong."
            }
          ],
          "choices": [
            {
              "label": "Research the Armstrong case connection",
              "nextNodeId": "node_04"
            },
            {
              "label": "Focus on the handkerchief with the 'H' monogram",
              "comment": "Focusing solely on the handkerchief without understanding the Armstrong connection leads to a partial view of the evidence",
              "nextNodeId": "node_05"
            }
          ]
        },
        {
          "id": "node_03",
          "sceneDescription": "Poirot decides to interview passengers without examining the crime scene thoroughly first. He speaks with Mr. MacQueen, Ratchett's secretary, in the dining car.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Seated across from MacQueen with a small notebook"
            },
            {
              "name": "Hector MacQueen",
              "appearance": "A nervous young American with a fidgety manner"
            }
          ],
          "dialogs": [
            {
              "from": "Hector MacQueen",
              "content": "I worked for Mr. Ratchett as his secretary. He received threatening letters recently. He couldn't read them - they were in English, and he only spoke French. I translated them for him."
            },
            {
              "from": "Hercule Poirot",
              "content": "Most interesting. Did Mr. Ratchett have enemies, to your knowledge?"
            },
            {
              "from": "Hector MacQueen",
              "content": "Plenty, I'd say. He was... not a pleasant man. But I don't know specifics. I only handled his correspondence."
            }
          ],
          "choices": [
            {
              "label": "Return to examine the crime scene properly",
              "nextNodeId": "node_02"
            },
            {
              "label": "Continue interviews without examining the crime scene",
              "comment": "Continuing without proper crime scene examination will result in missed connections and evidence",
              "nextNodeId": "node_06"
            }
          ]
        },
        {
          "id": "node_04",
          "sceneDescription": "Poirot discusses the Armstrong case with Monsieur Bouc, piecing together Ratchett's true identity and the significance of the case.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Thoughtfully rubbing his mustache as he recalls details of the case"
            },
            {
              "name": "Monsieur Bouc",
              "appearance": "Looking increasingly troubled as the conversation progresses"
            }
          ],
          "dialogs": [
            {
              "from": "Hercule Poirot",
              "content": "The Armstrong case was a terrible tragedy. The child, Daisy Armstrong, was kidnapped and murdered despite the ransom being paid. Her mother, pregnant at the time, died giving birth prematurely from the shock. Colonel Armstrong, her father, committed suicide."
            },
            {
              "from": "Monsieur Bouc",
              "content": "Mon Dieu! And you believe our victim is connected to this case?"
            },
            {
              "from": "Hercule Poirot",
              "content": "I believe that Ratchett was in fact Cassetti, the man responsible for kidnapping and murdering little Daisy Armstrong. He escaped justice in America through legal technicalities and bribery. This changes everything about our investigation."
            }
          ],
          "choices": [
            {
              "label": "Interview passengers to find connections to the Armstrong case",
              "nextNodeId": "node_07"
            },
            {
              "label": "Focus on the physical evidence to identify a single killer",
              "comment": "Focusing only on physical evidence without exploring connections to the Armstrong case misses the collaborative nature of the crime",
              "nextNodeId": "node_08"
            }
          ]
        },
        {
          "id": "node_05",
          "sceneDescription": "Poirot focuses his investigation on the handkerchief with the 'H' monogram found in Ratchett's compartment.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Carefully examining the handkerchief"
            },
            {
              "name": "Mrs. Hubbard",
              "appearance": "An elderly American woman, animated and talkative"
            }
          ],
          "dialogs": [
            {
              "from": "Hercule Poirot",
              "content": "Madame, I have found this handkerchief with the initial 'H' in the victim's compartment. Does it perhaps belong to you?"
            },
            {
              "from": "Mrs. Hubbard",
              "content": "Well, it might be mine - though I have several handkerchiefs! But I must tell you, Monsieur Poirot, that I heard someone in Ratchett's compartment last night. I was terrified! I'm sure the murderer passed through my compartment!"
            },
            {
              "from": "Hercule Poirot",
              "content": "That is most interesting, Madame. And when exactly did this occur?"
            }
          ],
          "choices": [
            {
              "label": "Broaden the investigation to include the Armstrong case",
              "nextNodeId": "node_04"
            },
            {
              "label": "Continue focusing on the handkerchief and Mrs. Hubbard's testimony",
              "comment": "Focusing too narrowly on single pieces of evidence without exploring the broader context will limit understanding of the case",
              "nextNodeId": "node_09"
            }
          ]
        },
        {
          "id": "node_06",
          "sceneDescription": "Poirot continues interviews without having properly examined the crime scene, leading to confused and incomplete information gathering.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Looking slightly frustrated as he interviews another passenger"
            },
            {
              "name": "Princess Dragomiroff",
              "appearance": "An elderly Russian princess with regal bearing and many jewels"
            }
          ],
          "dialogs": [
            {
              "from": "Princess Dragomiroff",
              "content": "I did not know this Ratchett person. I make it a point not to associate with people of questionable character."
            },
            {
              "from": "Hercule Poirot",
              "content": "Did you hear anything unusual during the night, Your Highness?"
            },
            {
              "from": "Princess Dragomiroff",
              "content": "I took my sleeping draught and heard nothing. My maid, Hildegarde Schmidt, may have heard something. You should speak with her."
            }
          ],
          "choices": [
            {
              "label": "Return to examine the crime scene properly",
              "nextNodeId": "node_02"
            },
            {
              "label": "Continue interviewing without establishing basic facts",
              "comment": "Continuing without establishing key facts will lead to a disorganized investigation",
              "nextNodeId": "node_10"
            }
          ]
        },
        {
          "id": "node_07",
          "sceneDescription": "Poirot begins interviewing passengers with a new focus: finding connections to the Armstrong family. He speaks with Mrs. Hubbard.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Alert and focused, watching Mrs. Hubbard's reactions carefully"
            },
            {
              "name": "Mrs. Hubbard",
              "appearance": "Chatty as always, but Poirot notices a theatrical quality to her mannerisms"
            }
          ],
          "dialogs": [
            {
              "from": "Hercule Poirot",
              "content": "Madame, are you familiar with the Armstrong kidnapping case from several years ago?"
            },
            {
              "from": "Mrs. Hubbard",
              "content": "The Armstrong case? Oh, that poor family! Such a tragedy. I didn't know them personally, of course, but everyone in America knew about it."
            },
            {
              "from": "Hercule Poirot",
              "content": "Indeed. And you mentioned your daughter earlier. Where does she reside?"
            },
            {
              "from": "Mrs. Hubbard",
              "content": "Oh, she lives in the States. She's married with three children now. I'm on my way back from visiting her, in fact."
            }
          ],
          "choices": [
            {
              "label": "Note Mrs. Hubbard's theatrical manner and continue interviewing other passengers",
              "nextNodeId": "node_11"
            },
            {
              "label": "Accept Mrs. Hubbard's story at face value",
              "comment": "Missing the theatrical quality in Mrs. Hubbard's responses means missing a key clue to her true identity",
              "nextNodeId": "node_12"
            }
          ]
        },
        {
          "id": "node_08",
          "sceneDescription": "Poirot focuses on analyzing the physical evidence to identify a single killer, examining the stab wounds and timing.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Frowning in concentration as he reviews his notes"
            },
            {
              "name": "Dr. Constantine",
              "appearance": "Pointing to his medical notes on the autopsy"
            }
          ],
          "dialogs": [
            {
              "from": "Dr. Constantine",
              "content": "The varying depths and angles of the wounds are most peculiar. Some were powerful, others weak, as if delivered by different individuals with different levels of strength."
            },
            {
              "from": "Hercule Poirot",
              "content": "And the timing? When would you estimate the murder took place?"
            },
            {
              "from": "Dr. Constantine",
              "content": "Between midnight and 2 AM, most likely. Though determining exact time of death is not an exact science."
            }
          ],
          "choices": [
            {
              "label": "Consider the possibility of multiple killers",
              "nextNodeId": "node_13"
            },
            {
              "label": "Continue seeking a single killer based on physical evidence alone",
              "comment": "Ignoring the evidence suggesting multiple killers will lead to incorrect conclusions",
              "nextNodeId": "node_14"
            }
          ]
        },
        {
          "id": "node_09",
          "sceneDescription": "Poirot continues to focus narrowly on the handkerchief and Mrs. Hubbard's testimony without considering the broader context.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Holding the handkerchief, looking somewhat perplexed"
            },
            {
              "name": "Monsieur Bouc",
              "appearance": "Watching Poirot with growing concern"
            }
          ],
          "dialogs": [
            {
              "from": "Monsieur Bouc",
              "content": "My friend, you seem to be fixated on this handkerchief. Do you believe it is so important?"
            },
            {
              "from": "Hercule Poirot",
              "content": "Every clue has significance, mon ami. But you are right - I am perhaps not seeing the forest for the trees. This case has many dimensions I have not yet explored."
            },
            {
              "from": "Monsieur Bouc",
              "content": "What about this Armstrong reference you mentioned earlier? Surely that warrants investigation?"
            }
          ],
          "choices": [
            {
              "label": "Broaden the investigation to include the Armstrong case",
              "nextNodeId": "node_04"
            },
            {
              "label": "Continue focusing on minor details without establishing context",
              "comment": "Focusing on isolated details without understanding their place in the broader case will lead to incorrect conclusions",
              "nextNodeId": "node_15"
            }
          ]
        },
        {
          "id": "node_10",
          "sceneDescription": "Poirot realizes his investigation has become disorganized without establishing basic facts about the crime scene first.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Looking frustrated as he reviews his notes"
            },
            {
              "name": "Monsieur Bouc",
              "appearance": "Watching Poirot with a concerned expression"
            }
          ],
          "dialogs": [
            {
              "from": "Hercule Poirot",
              "content": "This will not do. I have allowed myself to become distracted. I must apply method and order to my investigation."
            },
            {
              "from": "Monsieur Bouc",
              "content": "What will you do, Poirot?"
            },
            {
              "from": "Hercule Poirot",
              "content": "I must return to the beginning. Examine the evidence properly, establish the facts, and then proceed with logic and precision."
            }
          ],
          "choices": [
            {
              "label": "Return to examine the crime scene properly",
              "nextNodeId": "node_02"
            },
            {
              "label": "Continue with the disorganized approach",
              "comment": "Continuing with a disorganized approach will prevent the hero from solving the case correctly",
              "nextNodeId": "node_15"
            }
          ]
        },
        {
          "id": "node_11",
          "sceneDescription": "Poirot continues interviewing passengers, looking for Armstrong connections. He speaks with Miss Mary Debenham, a young English governess.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Seated opposite Miss Debenham, watching her carefully"
            },
            {
              "name": "Mary Debenham",
              "appearance": "A composed young Englishwoman with an intelligent face"
            }
          ],
          "dialogs": [
            {
              "from": "Hercule Poirot",
              "content": "Mademoiselle, where were you employed before your current position?"
            },
            {
              "from": "Mary Debenham",
              "content": "I worked for several families in the Middle East, Monsieur Poirot. Before that, I was in America for a time."
            },
            {
              "from": "Hercule Poirot",
              "content": "In America? Interesting. And were you acquainted with the Armstrong family, by any chance?"
            },
            {
              "from": "Mary Debenham",
              "content": "The name is not familiar to me, I'm afraid. Who were they?"
            }
          ],
          "choices": [
            {
              "label": "Note her composed denial and continue gathering evidence from other passengers",
              "nextNodeId": "node_16"
            },
            {
              "label": "Accept her denial and rule her out as connected to the Armstrong case",
              "comment": "Missing the possibility that Miss Debenham might be lying will exclude a key suspect",
              "nextNodeId": "node_17"
            }
          ]
        },
        {
          "id": "node_12",
          "sceneDescription": "Poirot accepts Mrs. Hubbard's story at face value and moves on, missing important clues about her true identity.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Making notes after his interview with Mrs. Hubbard"
            },
            {
              "name": "Monsieur Bouc",
              "appearance": "Sitting across from Poirot in the dining car"
            }
          ],
          "dialogs": [
            {
              "from": "Monsieur Bouc",
              "content": "What did you make of the American lady, Poirot? Quite a talker, non?"
            },
            {
              "from": "Hercule Poirot",
              "content": "Indeed. But I believe she has no connection to our case beyond being in the wrong place at the wrong time."
            },
            {
              "from": "Monsieur Bouc",
              "content": "Did you not find something... theatrical about her? Almost as if she were playing a role?"
            }
          ],
          "choices": [
            {
              "label": "Reconsider Mrs. Hubbard more carefully",
              "nextNodeId": "node_07"
            },
            {
              "label": "Dismiss Bouc's observation and continue with other interviews",
              "comment": "Dismissing this insight will cause the hero to miss a key connection",
              "nextNodeId": "node_17"
            }
          ]
        },
        {
          "id": "node_13",
          "sceneDescription": "Poirot begins to consider the revolutionary idea that multiple people might have been involved in the murder of Ratchett/Cassetti.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Pacing thoughtfully in his compartment"
            },
            {
              "name": "Dr. Constantine",
              "appearance": "Watching Poirot with growing interest"
            }
          ],
          "dialogs": [
            {
              "from": "Hercule Poirot",
              "content": "What if, mon cher docteur, we are not looking for a single murderer? What if several people - perhaps all connected to the Armstrong tragedy - conspired to eliminate Cassetti?"
            },
            {
              "from": "Dr. Constantine",
              "content": "Multiple killers? That would explain the different types of wounds... But surely such a conspiracy is unlikely?"
            },
            {
              "from": "Hercule Poirot",
              "content": "On the contrary. If Ratchett was indeed Cassetti, then every passenger might have had a motive if they were connected to the Armstrong family. I must determine if such connections exist."
            }
          ],
          "choices": [
            {
              "label": "Interview passengers specifically looking for Armstrong connections",
              "nextNodeId": "node_07"
            },
            {
              "label": "Dismiss the multiple killers theory as too implausible",
              "comment": "Dismissing this theory prematurely will prevent the hero from reaching the correct solution",
              "nextNodeId": "node_14"
            }
          ]
        },
        {
          "id": "node_14",
          "sceneDescription": "Poirot continues to pursue the theory of a single killer despite evidence suggesting multiple perpetrators.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Looking puzzled as he reviews contradictory evidence"
            },
            {
              "name": "Monsieur Bouc",
              "appearance": "Offering Poirot a glass of cognac to help him think"
            }
          ],
          "dialogs": [
            {
              "from": "Monsieur Bouc",
              "content": "Have you made progress, mon ami? Who do you believe is our killer?"
            },
            {
              "from": "Hercule Poirot",
              "content": "The evidence is... contradictory. Some points to one passenger, some to another. It is most perplexing."
            },
            {
              "from": "Monsieur Bouc",
              "content": "Perhaps there is an explanation we have not yet considered? Something beyond the conventional?"
            }
          ],
          "choices": [
            {
              "label": "Consider the possibility of multiple killers",
              "nextNodeId": "node_13"
            },
            {
              "label": "Continue trying to identify a single killer",
              "comment": "Persisting with this approach despite contradictory evidence will lead to incorrect conclusions",
              "nextNodeId": "node_15"
            }
          ]
        },
        {
          "id": "node_15",
          "sceneDescription": "Poirot has reached an investigative dead end, unable to make sense of the contradictory evidence and testimonies.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Frustrated, rubbing his temples"
            },
            {
              "name": "Monsieur Bouc",
              "appearance": "Looking concerned about his friend's confusion"
            }
          ],
          "dialogs": [
            {
              "from": "Hercule Poirot",
              "content": "This case defies my methods. The evidence points in too many directions at once."
            },
            {
              "from": "Monsieur Bouc",
              "content": "Perhaps you need to step back and reconsider your approach entirely, mon ami?"
            },
            {
              "from": "Hercule Poirot",
              "content": "You are right. I have been too rigid in my thinking. Let me return to the beginning and consider what I might have overlooked."
            }
          ],
          "choices": [
            {
              "label": "Return to examining the crime scene with fresh eyes",
              "nextNodeId": "node_02"
            },
            {
              "label": "Consider the revolutionary theory of multiple killers",
              "nextNodeId": "node_13"
            }
          ]
        },
        {
          "id": "node_16",
          "sceneDescription": "Poirot has now interviewed multiple passengers and begins to see a pattern of connections to the Armstrong case, though most deny any knowledge when asked directly.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Studying his notes intently, connecting dots"
            },
            {
              "name": "Monsieur Bouc",
              "appearance": "Watching Poirot with growing amazement"
            }
          ],
          "dialogs": [
            {
              "from": "Hercule Poirot",
              "content": "It is remarkable, mon ami. When I look closely at our passengers, I begin to see connections. The Swedish lady, Greta Ohlsson - her profession is nursing. The Armstrong family employed a nurse for their children."
            },
            {
              "from": "Monsieur Bouc",
              "content": "And the others?"
            },
            {
              "from": "Hercule Poirot",
              "content": "Princess Dragomiroff mentioned being friends with Linda Arden, a great American actress - who was Daisy Armstrong's grandmother. Colonel Arbuthnot served with Colonel Armstrong in the war. And there are more connections I suspect but cannot yet prove."
            }
          ],
          "choices": [
            {
              "label": "Formulate a theory that all passengers are connected to the Armstrong case",
              "nextNodeId": "node_18"
            },
            {
              "label": "Decide these connections are coincidental and look for a single killer",
              "comment": "Dismissing these connections will prevent the hero from reaching the correct solution",
              "nextNodeId": "node_14"
            }
          ]
        },
        {
          "id": "node_17",
          "sceneDescription": "Poirot's investigation has become fragmented as he misses key connections between passengers and the Armstrong case.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Looking frustrated as he reviews inconsistent testimonies"
            },
            {
              "name": "Dr. Constantine",
              "appearance": "Listening to Poirot's thoughts"
            }
          ],
          "dialogs": [
            {
              "from": "Hercule Poirot",
              "content": "The testimonies conflict, the evidence is contradictory. I cannot make sense of it all."
            },
            {
              "from": "Dr. Constantine",
              "content": "Could your initial theory be incorrect? Perhaps there is another explanation altogether?"
            },
            {
              "from": "Hercule Poirot",
              "content": "Perhaps... I need to reconsider everything from the beginning. The Armstrong case must be significant - why else would that name be found in Ratchett's compartment?"
            }
          ],
          "choices": [
            {
              "label": "Return to investigating Armstrong connections more thoroughly",
              "nextNodeId": "node_07"
            },
            {
              "label": "Continue pursuing disconnected leads",
              "comment": "Continuing with disconnected leads will prevent the hero from assembling the complete picture",
              "nextNodeId": "node_15"
            }
          ]
        },
        {
          "id": "node_18",
          "sceneDescription": "Poirot begins to formulate his revolutionary theory that all the passengers worked together to kill Ratchett/Cassetti.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Eyes bright with the excitement of discovery, arranging papers on a table"
            },
            {
              "name": "Monsieur Bouc",
              "appearance": "Watching with growing astonishment"
            }
          ],
          "dialogs": [
            {
              "from": "Hercule Poirot",
              "content": "Consider this, mon ami - what if every passenger on this coach had a connection to the Armstrong family? What if they all had reason to want justice for little Daisy Armstrong?"
            },
            {
              "from": "Monsieur Bouc",
              "content": "You cannot be suggesting that they all participated in the murder? Such a conspiracy would be unprecedented!"
            },
            {
              "from": "Hercule Poirot",
              "content": "Yet it explains everything - the multiple stab wounds of varying strength, the contradictory evidence, the locked door. They acted as a jury, judge, and executioners for a man who escaped proper justice."
            }
          ],
          "choices": [
            {
              "label": "Gather all passengers for the final revelation",
              "nextNodeId": "node_19"
            },
            {
              "label": "Continue looking for a single killer despite the evidence",
              "comment": "Ignoring the accumulated evidence pointing to collective action will prevent reaching the correct conclusion",
              "nextNodeId": "node_14"
            }
          ]
        },
        {
          "id": "node_19",
          "sceneDescription": "Poirot gathers all the passengers in the dining car for his dramatic revelation of the truth behind Ratchett's murder.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Standing at the head of the dining car, commanding everyone's attention"
            },
            {
              "name": "Monsieur Bouc",
              "appearance": "Seated beside Poirot, looking both nervous and intrigued"
            },
            {
              "name": "Mrs. Hubbard",
              "appearance": "Unusually subdued, watching Poirot intently"
            },
            {
              "name": "Mary Debenham",
              "appearance": "Composed but alert, her hands clasped tightly"
            },
            {
              "name": "Princess Dragomiroff",
              "appearance": "Regally defiant, showing no fear"
            }
          ],
          "dialogs": [
            {
              "from": "Hercule Poirot",
              "content": "Ladies and gentlemen, I have discovered the truth about the murder of the man calling himself Ratchett. He was, in fact, Cassetti - the criminal responsible for the kidnapping and murder of little Daisy Armstrong."
            },
            {
              "from": "Hercule Poirot",
              "content": "And every one of you had a connection to the Armstrong family. Mrs. Hubbard is Linda Arden herself, Daisy's grandmother. Miss Debenham was Daisy's governess. Colonel Arbuthnot was Colonel Armstrong's comrade. Each of you had a role in that household, or was connected to someone who did."
            },
            {
              "from": "Hercule Poirot",
              "content": "You formed a jury of twelve - like the twelve stab wounds - to deliver the justice that the American courts failed to provide. Every one of you participated in Cassetti's execution."
            },
            {
              "from": "Mrs. Hubbard",
              "content": "And if we did? What then, Monsieur Poirot? Will you turn us in? That monster destroyed my family. My daughter, my granddaughter, my son-in-law - all dead because of him."
            }
          ],
          "choices": [
            {
              "label": "Present the official solution that protects the passengers",
              "nextNodeId": "node_20"
            },
            {
              "label": "Insist on reporting the full truth to the authorities",
              "comment": "This choice is valid but leads to a different conclusion than in the original story",
              "nextNodeId": "node_21"
            }
          ]
        },
        {
          "id": "node_20",
          "sceneDescription": "Poirot presents his official solution to the authorities when the train is finally freed from the snowdrift.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Somber but resolute as he presents his findings"
            },
            {
              "name": "Monsieur Bouc",
              "appearance": "Nodding in agreement with Poirot's explanation"
            }
          ],
          "dialogs": [
            {
              "from": "Hercule Poirot",
              "content": "My conclusion is that an unknown assassin - likely connected to the criminal underworld that Ratchett once belonged to - boarded the train at an earlier stop. This person stabbed Ratchett and escaped into the night during our stop in the snowdrift."
            },
            {
              "from": "Monsieur Bouc",
              "content": "Yes, this solution makes the most sense. Justice has been served in its own way, has it not?"
            },
            {
              "from": "Hercule Poirot",
              "content": "Perhaps. I have solved many cases in my career, but none that has tested my understanding of justice as much as this one. Sometimes, mon ami, the law and true justice are not the same thing."
            }
          ],
          "choices": [
            {
              "label": "Reflect on the case as the train continues its journey",
              "nextNodeId": "node_22"
            },
            {
              "label": "Reconsider and tell the full truth",
              "comment": "Changing the decision at this point would be inconsistent with the character's ethical reasoning process",
              "nextNodeId": "node_21"
            }
          ]
        },
        {
          "id": "node_21",
          "sceneDescription": "Poirot decides that, despite his sympathy, he must uphold the letter of the law and report the full truth to the authorities.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Troubled but determined, standing firm in his principles"
            },
            {
              "name": "Monsieur Bouc",
              "appearance": "Looking disappointed with Poirot's decision"
            },
            {
              "name": "Mrs. Hubbard",
              "appearance": "Dignified even in defeat, her true identity as Linda Arden now revealed"
            }
          ],
          "dialogs": [
            {
              "from": "Hercule Poirot",
              "content": "I understand your motivation. I even sympathize with it. But I cannot be party to concealing the truth. The law must take its course, however imperfect it may be."
            },
            {
              "from": "Mrs. Hubbard",
              "content": "Then we place ourselves at the mercy of the courts once again, Monsieur Poirot. I only hope they show more wisdom this time than they did with Cassetti."
            },
            {
              "from": "Monsieur Bouc",
              "content": "Are you certain, mon ami? There are times when mercy might supersede strict justice."
            },
            {
              "from": "Hercule Poirot",
              "content": "I have spent my life in pursuit of truth. I cannot abandon that principle now, however much it pains me."
            }
          ],
          "choices": [
            {
              "label": "Reflect on the case as the train continues its journey",
              "nextNodeId": "node_23"
            },
            {
              "label": "Change your mind and present the alternative solution",
              "comment": "Changing the decision at this point would be inconsistent with the character's ethical reasoning process",
              "nextNodeId": "node_20"
            }
          ]
        },
        {
          "id": "node_22",
          "sceneDescription": "As the Orient Express continues its journey, Poirot reflects on the case and his decision to present the alternative solution that protects the passengers.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Staring thoughtfully out the window as snowy landscapes pass by"
            },
            {
              "name": "Monsieur Bouc",
              "appearance": "Joining Poirot with two glasses of cognac"
            }
          ],
          "dialogs": [
            {
              "from": "Monsieur Bouc",
              "content": "You look troubled, mon ami. Having regrets?"
            },
            {
              "from": "Hercule Poirot",
              "content": "Not regrets, exactly. But I have always prided myself on my devotion to truth and justice. Today I chose a different path."
            },
            {
              "from": "Monsieur Bouc",
              "content": "Perhaps you simply recognized a higher form of justice? These people had already suffered greatly because of Cassetti."
            },
            {
              "from": "Hercule Poirot",
              "content": "Perhaps. But it is not for Hercule Poirot to decide who deserves to live or die. That is my dilemma. Still, I believe in this unique case, I have made the right choice. Justice has been served, if not by the law's hand, then by another's."
            }
          ],
          "choices": [
            {
              "label": "END: Poirot has solved the case and chosen mercy over strict justice",
              "nextNodeId": "end"
            }
          ]
        },
        {
          "id": "node_23",
          "sceneDescription": "As the Orient Express continues its journey, Poirot reflects on the case and his decision to report the full truth, upholding his principles despite his sympathy for the passengers.",
          "charactors": [
            {
              "name": "Hercule Poirot",
              "appearance": "Somber and pensive, sitting alone in his compartment"
            },
            {
              "name": "Monsieur Bouc",
              "appearance": "Entering with a concerned expression"
            }
          ],
          "dialogs": [
            {
              "from": "Monsieur Bouc",
              "content": "The authorities will be waiting at the next station. Are you at peace with your decision, Poirot?"
            },
            {
              "from": "Hercule Poirot",
              "content": "At peace? No. But I am at peace with my principles. Throughout my career, I have sought truth above all else. If I abandoned that now, who would I be?"
            },
            {
              "from": "Monsieur Bouc",
              "content": "And yet, was Cassetti's original escape from justice not also a failure of the system you uphold?"
            },
            {
              "from": "Hercule Poirot",
              "content": "Indeed. That is the tragedy. The system is imperfect, but if we each take justice into our own hands, we invite chaos. I must trust that the courts will now see the extraordinary circumstances of this case and show mercy where appropriate."
            }
          ],
          "choices": [
            {
              "label": "END: Poirot has solved the case and chosen truth over mercy",
              "nextNodeId": "end"
            }
          ]
        }
      ]    

function formatingShengRongSample(data){
  let storyData = {
    title:"Feb27_ShengRong_sample_story",
    startNode: data.length > 0 ? data[0].id : "unknown",
    characters: {},
    nodes:{}
  };

  data.forEach(scene => {
    storyData.nodes[scene.id] = {
      id: scene.id,
      sceneDescription: scene.sceneDescription || "no description available",
      imagePrompt: "",
      dialogues: scene.dialogs || [],
      choices: scene.choices.filter(choice => choice.nextNodeId !== 'end')
      .map(choice => ({
        text: choice.label,
        nextNode: choice.nextNodeId
      })),
      next:null
    }
  })

  return storyData
}

const Feb27_ShengRong_sample_story_converted = formatingShengRongSample(Feb27_ShengRong_sample_story)

export { Feb26_Colin_sample_story,Feb27_ShengRong_sample_story,Feb27_ShengRong_sample_story_converted };
