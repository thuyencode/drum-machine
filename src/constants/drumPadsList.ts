const drumPads = [
  {
    drumPad: 'Q',
    names: ['Heater 1', 'Chord 1'],
    sounds: [
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
    ],
  },
  {
    drumPad: 'W',
    names: ['Heater 2', 'Chord 2'],
    sounds: [
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
    ],
  },
  {
    drumPad: 'E',
    names: ['Heater 3', 'Chord 3'],
    sounds: [
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
    ],
  },
  {
    drumPad: 'A',
    names: ['Heater 4', 'Shaker'],
    sounds: [
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
    ],
  },
  {
    drumPad: 'S',
    names: ['Clap', 'Open HH'],
    sounds: [
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
    ],
  },
  {
    drumPad: 'D',
    names: ['Open HH', 'Closed HH'],
    sounds: [
      'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
    ],
  },
  {
    drumPad: 'Z',
    names: ["Kick n' Hat", 'Punchy Kick'],
    sounds: [
      'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
    ],
  },
  {
    drumPad: 'X',
    names: ['Kick', 'Side Stick'],
    sounds: [
      'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
    ],
  },
  {
    drumPad: 'C',
    names: ['Closed HH', 'Snare'],
    sounds: [
      'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
    ],
  },
] as const

export default drumPads
