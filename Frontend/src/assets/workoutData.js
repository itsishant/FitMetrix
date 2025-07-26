export const workouts = [ 
  { 
    name: "Incline Push-Ups", 
    image: "/public/incie.png", 
    descriptions: "A beginner-friendly push-up variation that targets the chest with reduced resistance.", 
    details: [ 
      "Find a sturdy elevated surface like a bench, chair, or wall.", 
      "Place hands slightly wider than shoulder-width apart on the surface.", 
      "Step feet back until body forms straight line from head to heels.", 
      "Engage core and glutes to maintain rigidity.", 
      "Lower chest towards the elevated surface by bending elbows.", 
      "Ensure elbows point slightly back, not flared straight out.", 
      "Push through your hands to return to straight-arm position." 
    ], 
    type: "upper" 
  }, 
  { 
    name: "Overhead Squat", 
    image: "/public/ncne.png", 
    descriptions: "A full-body squat performed while holding a barbell overhead, improving strength, stability, and mobility.", 
    details: [ 
      "Hold barbell overhead with wide snatch-grip, arms fully locked.", 
      "Position feet shoulder-width apart, with toes pointed slightly outward.", 
      "Maintain active core, keep bar directly over your mid-foot.", 
      "Initiate squat by pushing hips back and bending knees.", 
      "Descend into full squat, keep chest up, bar overhead.", 
      "Ensure torso remains as upright as possible throughout movement.", 
      "Drive through heels to stand back up to fully extended position." 
    ], 
    type: "full" 
  }, 
  { 
    name: "Seated Barbell Shoulder Press", 
    image: "/public/seacnm.png", 
    descriptions: "An upper-body strength exercise where the lifter presses a barbell overhead while seated, targeting the shoulders and triceps.", 
    details: [ 
      "Sit on sturdy bench with back support, feet flat.", 
      "Unrack barbell, hold at shoulder height, grip wider than shoulder-width.", 
      "Keep chest up, shoulders back, core engaged for stability.", 
      "Press barbell directly overhead, extend arms, don't lock elbows.", 
      "Control weight at top, ensuring shoulders are active.", 
      "Slowly lower barbell back down to starting shoulder height.", 
      "Maintain tension in shoulders and triceps throughout repetition." 
    ], 
    type: "shoulder" 
  }, 
  { 
    name: "Dumbbell Bicep Curl", 
    image: "/public/kdnkn3en.png", 
    descriptions: "A classic arm exercise where you lift dumbbells by bending your elbows, isolating and building the biceps.", 
    details: [ 
      "Stand or sit holding dumbbell in each hand, palms forward.", 
      "Keep elbows tucked close to sides throughout the movement.", 
      "Curl dumbbells upward towards shoulders, flexing only at elbow.", 
      "Squeeze biceps forcefully at the very top of contraction.", 
      "Slowly lower dumbbells back down to the starting position.", 
      "Resist gravity on the way down, maximize muscle engagement.", 
      "Ensure full extension at bottom for complete stretch." 
    ], 
    type: "arms" 
  }, 
  { 
    name: "Plank", 
    image: "/public/ksndkn3n.png", 
    descriptions: "A core strengthening isometric exercise where you hold your body in a straight line, engaging the abs, back, and shoulders.", 
    details: [ 
      "Start in push-up position, then lower onto forearms.", 
      "Ensure elbows are directly beneath your shoulders.", 
      "Keep body in perfectly straight line, head to heels.", 
      "Actively engage abdominal muscles, squeezing them inward.", 
      "Tighten glutes and quadriceps to prevent hips from sagging.", 
      "Avoid letting hips rise too high or drop below line.", 
      "Hold rigid position, focus on deep breathing." 
    ], 
    type: "core" 
  }, 
  { 
    name: "Mountain Climbers", 
    image: "/public/1jb7h2.png", 
    descriptions: "A dynamic exercise that engages the core and legs by rapidly switching knee drives in a plank position.", 
    details: [ 
      "Begin in high plank, hands directly under shoulders, body straight.", 
      "Engage core to stabilize your torso.", 
      "Quickly bring your right knee towards your chest.", 
      "Extend right leg back, simultaneously bring left knee to chest.", 
      "Continue alternating legs rapidly in a running motion.", 
      "Keep hips relatively low, minimize excessive bouncing.", 
      "Maintain a strong, stable upper body throughout exercise." 
    ], 
    type: "cardio" 
  }, 
  { 
    name: "Lunges", 
    image: "/public/qqomlmwe.png", 
    descriptions: "A lower-body move that targets the glutes, quads, and hamstrings by stepping forward and lowering the body.", 
    details: [ 
      "Stand tall, feet hip-width apart, hands on hips.", 
      "Take large step forward with one leg, torso upright.", 
      "Lower hips until both knees bend at 90 degrees.", 
      "Front knee directly above ankle, not past toes.", 
      "Back knee should hover just above the floor.", 
      "Push off powerfully through front heel to stand up.", 
      "Alternate legs, maintaining balance and control." 
    ], 
    type: "legs" 
  }, 
  { 
    name: "Jumping Jacks", 
    image: "/public/jumas.png", 
    descriptions: "A full-body cardio move involving jumping with arms and legs spreading out, then returning to the start position.", 
    details: [ 
      "Start standing, feet together, arms at sides.", 
      "Jump feet out wider than shoulder-width apart.", 
      "As feet jump out, raise arms overhead.", 
      "Immediately jump feet back together.", 
      "At same time, bring arms back to sides.", 
      "Maintain rhythmic, controlled motion, avoiding floppy movements.", 
      "Repeat continuously, focusing on light landings." 
    ], 
    type: "cardio" 
  }, 
  { 
    name: "Bent Over Rows", 
    image: "/public/bor.png", 
    descriptions: "A back-focused strength exercise where you bend at the hips and pull weights toward your torso.", 
    details: [ 
      "Stand feet hip-width apart, hold barbell or dumbbells.", 
      "Hinge at hips, push glutes back, torso parallel to floor.", 
      "Maintain flat back, engaged core, slight knee bend.", 
      "Allow weights to hang directly below shoulders, arms extended.", 
      "Pull weights up to lower chest, squeeze shoulder blades.", 
      "Keep elbows close to body as you pull.", 
      "Lower weights slowly, with control, back to start." 
    ], 
    type: "upper" 
  }, 
  { 
    name: "Russian Twists", 
    image: "/public/rt.png", 
    descriptions: "A core rotation move done seated, twisting the torso side to side to target obliques.", 
    details: [ 
      "Sit on floor, knees bent, feet flat.", 
      "Lean back slightly, engage core, torso at 45 degrees.", 
      "Lift feet off ground for increased difficulty (optional).", 
      "Clasp hands or hold medicine ball/weight.", 
      "Twist torso to one side, touch hands to floor.", 
      "Immediately twist to opposite side, controlled motion.", 
      "Maintain core engagement, avoid excessive back rounding." 
    ], 
    type: "core" 
  }, 
  { 
    name: "Deadlifts", 
    image: "/public/dl.png", 
    descriptions: "A compound lift where you lift a loaded barbell from the floor, working the entire posterior chain.", 
    details: [ 
      "Stand feet hip-width apart, barbell over mid-foot.", 
      "Hinge at hips, bend knees slightly, grip bar.", 
      "Ensure back is flat, chest up, shoulders back.", 
      "Deep breath, engage core, drive through heels to lift.", 
      "Maintain straight back, stand upright, extend hips.", 
      "Squeeze glutes at top, do not hyperextend back.", 
      "Lower bar slowly, with control, reverse motion." 
    ], 
    type: "full" 
  }, 
  { 
    name: "Leg Raises", 
    image: "/public/lr.gif", 
    descriptions: "An abdominal exercise where you lift your legs while lying down, targeting the lower abs.", 
    details: [ 
      "Lie flat on your back, legs straight.", 
      "Place hands under lower back for support (optional).", 
      "Keep legs straight, slowly lift them to ceiling.", 
      "Lift until hips slightly off floor, engage lower abs.", 
      "Avoid momentum or arching lower back.", 
      "Slowly lower legs back down to floor.", 
      "Stop just before heels touch to maintain tension." 
    ], 
    type: "core" 
  }, 
  { 
    name: "Burpees", 
    image: "/public/burpees.gif", 
    descriptions: "A high-intensity full-body exercise involving a squat, jump, and push-up sequence.", 
    details: [ 
      "Start standing, feet shoulder-width apart.", 
      "Squat down, place hands on floor in front.", 
      "Kick feet back into high plank position.", 
      "Perform one push-up (optional, or modify knees).", 
      "Immediately jump feet back towards hands, land squat.", 
      "Explosively stand up, jump vertically, hands clapped.", 
      "Land softly, transition into next repetition." 
    ], 
    type: "full" 
  }, 
  { 
    name: "Tricep Dips", 
    image: "/public/tricepdips.png", 
    descriptions: "A bodyweight move targeting the triceps by lowering and raising the body using parallel bars or a bench.", 
    details: [ 
      "For bench dips: Sit edge of bench, hands gripping.", 
      "Slide hips off, support body with straight arms.", 
      "For parallel bar dips: Grip bars, support body with straight arms.", 
      "Lower body bending elbows, keep them pointing back.", 
      "Descend until elbows are about 90-degree angle.", 
      "Push powerfully through palms to return to start.", 
      "Focus on feeling contraction in your triceps." 
    ], 
    type: "arms" 
  }, 
  { 
    name: "High Knees", 
    image: "/public/highknees.png", 
    descriptions: "A cardio move where you run in place, lifting your knees high to engage the core and improve endurance.", 
    details: [ 
      "Stand tall with feet hip-width apart.", 
      "Begin running in place, lift knees high.", 
      "Aim thighs parallel to ground with each lift.", 
      "Pump arms rhythmically as if sprinting.", 
      "Maintain upright torso, engage core to stabilize.", 
      "Focus on quick, light foot strike, minimize contact.", 
      "Continue rapid, alternating knee lifts for duration." 
    ], 
    type: "cardio" 
  }, 
  { 
    name: "Chest Fly", 
    image: "/public/chestfly.png", 
    descriptions: "An isolation chest exercise performed by opening and closing the arms in a wide arc using dumbbells or a machine.", 
    details: [ 
      "Lie on bench, hold dumbbell in each hand.", 
      "Extend arms slightly bent, positioned over chest.", 
      "Slowly lower dumbbells out to sides, wide arc.", 
      "Feel stretch across chest as dumbbells descend.", 
      "Stop when upper arms parallel with torso.", 
      "Reverse motion, bring dumbbells back up in arc.", 
      "Squeeze chest muscles forcefully together at top." 
    ], 
    type: "upper" 
  }, 
  { 
    name: "Pull-Ups", 
    image: "/public/pull-up.png", 
    descriptions: "An upper-body strength move where you lift your body up to a bar, targeting the back and biceps.", 
    details: [ 
      "Hang from pull-up bar, overhand grip, hands wide.", 
      "Start from dead hang, arms fully extended.", 
      "Engage back muscles, pull body up to bar.", 
      "Focus on pulling elbows down towards hips.", 
      "Pull until chin clears bar or chest touches.", 
      "Slowly lower body back to dead hang position.", 
      "Maintain control throughout, avoiding swinging." 
    ], 
    type: "upper" 
  }, 
  { 
    name: "Push-Ups", 
    image: "/public/push-up.png", 
    descriptions: "A foundational bodyweight exercise that builds upper body and core strength by lowering and raising the body.", 
    details: [ 
      "Start in high plank, hands wider than shoulder-width.", 
      "Ensure body forms straight line, head to heels.", 
      "Engage core and glutes to keep body rigid.", 
      "Lower chest to floor by bending elbows.", 
      "Keep elbows tucked slightly towards body, not flared.", 
      "Once chest close to floor, push through hands.", 
      "Return to straight-arm plank, maintaining straight body." 
    ], 
    type: "upper" 
  }, 
  { 
    name: "Kettlebell Swings", 
    image: "/public/kettle-swings.png", 
    descriptions: "A powerful hip-driven move that targets the posterior chain using a swinging kettlebell.", 
    details: [ 
      "Place kettlebell on floor, feet wider than shoulder-width.", 
      "Hinge at hips, push glutes back, grab kettlebell.", 
      "Hike kettlebell back between legs, forearms touch thighs.", 
      "Explosively drive hips forward, squeezing glutes.", 
      "Momentum swings kettlebell up to chest/eye level.", 
      "Do not lift kettlebell with arms, hips generate power.", 
      "Kettlebell swings down, re-hinge for next rep." 
    ], 
    type: "full" 
  }, 
  { 
    name: "Glute Bridges", 
    image: "/public/glute-bridges.png", 
    descriptions: "A floor exercise to strengthen the glutes and hamstrings by lifting the hips upward.", 
    details: [ 
      "Lie on back on floor, knees bent, feet flat.", 
      "Position feet close to glutes, hip-width apart.", 
      "Arms at sides, palms pressed into floor for stability.", 
      "Engage core and glutes, lift hips off floor.", 
      "Lift until body forms straight line, shoulders to knees.", 
      "Squeeze glutes powerfully at the top.", 
      "Slowly lower hips back down with control." 
    ], 
    type: "legs" 
  }, 
  { 
    name: "Hammer Curls", 
    image: "/public/hammer-curl.png", 
    descriptions: "A variation of the bicep curl performed with palms facing each other to target the brachialis.", 
    details: [ 
      "Stand or sit holding dumbbell in each hand, palms facing.", 
      "Keep elbows tucked close to sides throughout the movement.", 
      "Curl dumbbells upward towards shoulders, flexing only at elbow.", 
      "Maintain neutral grip (palms facing) throughout curl.", 
      "Squeeze biceps and forearms at top of contraction.", 
      "Slowly lower dumbbells back to starting position.", 
      "Resist gravity on the way down, maximize muscle engagement.", 
      "Ensure full extension at bottom for complete stretch." 
    ], 
    type: "arms" 
  }, 
  { 
    name: "Lateral Raises", 
    image: "/public/lateral-raises.png", 
    descriptions: "An isolation shoulder exercise where arms are raised to the sides, targeting the deltoids.", 
    details: [ 
      "Stand tall, hold dumbbell in each hand at sides.", 
      "Keep slight bend in elbows, maintain throughout.", 
      "Raise arms out to sides in controlled arc.", 
      "Lift dumbbells until arms parallel with shoulders.", 
      "Avoid shrugging shoulders or using momentum.", 
      "Briefly pause at top, focus on side deltoids.", 
      "Slowly lower dumbbells back down with control." 
    ], 
    type: "shoulder" 
  }, 
  { 
    name: "Skater Jumps", 
    image: "/public/skater-jump.png", 
    descriptions: "A plyometric move mimicking a skating motion to boost leg power and balance.", 
    details: [ 
      "Start in athletic stance, feet hip-width apart.", 
      "Push off one leg, jump laterally to opposite side.", 
      "Land softly on opposite foot, knee bent, absorb impact.", 
      "As you land, sweep trailing leg behind for balance.", 
      "Immediately push off landing leg to jump back.", 
      "Maintain low, controlled body position throughout.", 
      "Continue alternating sides in quick, fluid motion." 
    ], 
    type: "cardio" 
  }, 
  { 
    name: "Wall Sit", 
    image: "/public/wall-sit.png", 
    descriptions: "An isometric leg exercise where you hold a seated position against a wall to strengthen quads and endurance.", 
    details: [ 
      "Stand with your back flat against a sturdy wall.", 
      "Slide down wall until knees bent at 90 degrees.", 
      "Ensure thighs are parallel to floor, sitting invisible chair.", 
      "Keep entire back pressed firmly against wall.", 
      "Place hands on thighs or straight out.", 
      "Engage quadriceps and glutes to maintain position.", 
      "Hold static position, focus on deep breathing." 
    ], 
    type: "legs" 
  }, 
  { 
    name: "Toe Touches", 
    image: "/public/toe-touch.png", 
    descriptions: "A core move where you lie down and lift your upper body to touch your toes, targeting the abs.", 
    details: [ 
      "Lie flat on back, legs extended straight up.", 
      "Keep arms extended straight overhead, reaching towards feet.", 
      "Engage core muscles, drawing navel to spine.", 
      "Lift upper body off floor, reach hands to toes.", 
      "Focus on crunching abs, avoid pulling neck.", 
      "Briefly hold top position, touch or reach toes.", 
      "Slowly lower upper body back down with control." 
    ], 
    type: "core" 
  }, 
  { 
    name: "Side Plank", 
    image: "/public/side-plank.png", 
    descriptions: "A variation of the plank that targets the obliques and improves core stability.", 
    details: [ 
      "Lie on side, support upper body on one forearm.", 
      "Ensure elbow is directly beneath your shoulder.", 
      "Stack feet, or place top foot in front for stability.", 
      "Engage obliques and glutes, lift hips off floor.", 
      "Form straight line with body, head to ankles.", 
      "Avoid letting hips sag or rotate forward/backward.", 
      "Hold rigid position, then switch to other side." 
    ], 
    type: "core" 
  }, 
  { 
    name: "Arnold Press", 
    image: "/public/arnold-press.png", 
    descriptions: "A shoulder exercise combining a rotation and overhead press for full deltoid activation.", 
    details: [ 
      "Sit or stand, hold dumbbell in each hand, palms facing.", 
      "Keep elbows tucked in front of body.", 
      "Press dumbbells overhead, rotate wrists, palms forward.", 
      "Fully extend arms at top, engage deltoids.", 
      "Control weight as you slowly lower dumbbells.", 
      "Reverse rotation as you descend, palms face you.", 
      "Maintain fluid motion and control throughout." 
    ], 
    type: "shoulder" 
  }, 
  { 
    name: "Front Squats", 
    image: "/public/front-squat.png", 
    descriptions: "A barbell squat with the bar held in front of the shoulders, emphasizing the quads and core.", 
    details: [ 
      "Rack barbell across front of shoulders, clean grip.", 
      "Keep elbows pointed high, maintaining bar position.", 
      "Stand feet shoulder-width apart, toes slightly out.", 
      "Initiate squat by pushing hips back, bending knees.", 
      "Descend into full squat, chest up, vertical torso.", 
      "Go as deep as comfortable, maintain proper form.", 
      "Drive through heels to stand back up, fully extended." 
    ], 
    type: "legs" 
  }, 
  { 
    name: "Box Jumps", 
    image: "/public/box-jump.png", 
    descriptions: "A plyometric exercise involving jumping onto a box to build explosive power and coordination.", 
    details: [ 
      "Set up a sturdy box or plyo box.", 
      "Stand about a foot away, feet hip-width apart.", 
      "Initiate jump by swinging arms, quarter squat.", 
      "Explode upwards and forwards, driving through feet.", 
      "Land softly on box with bent knees, absorb impact.", 
      "Stand up fully erect on the box.", 
      "Step or jump back down carefully." 
    ], 
    type: "cardio" 
  }, 
  { 
    name: "Treadmill Sprint", 
    image: "/public/treadmill-sprint.png", 
    descriptions: "A high-intensity cardio exercise done on a treadmill to improve speed and endurance.", 
    details: [ 
      "Begin with thorough warm-up, light jogging or walking.", 
      "Increase speed to full-out sprint, maximum effort.", 
      "Maintain good running form: pump arms, gaze forward.", 
      "Sprint for short, predetermined interval (15-30 seconds).", 
      "Immediately reduce speed to slow walk for recovery.", 
      "Recover for longer duration than your sprint.", 
      "Repeat sprint and recovery intervals for workout." 
    ], 
    type: "cardio" 
  }, 
  { 
    name: "Cable Rows", 
    image: "/public/cable-row.png", 
    descriptions: "A back exercise using a cable machine to pull a handle toward the torso, engaging the lats and rhomboids.", 
    details: [ 
      "Sit at cable row machine, feet firmly on plate.", 
      "Reach forward, grab handle with both hands.", 
      "Lean back slightly, back straight, knees bent.", 
      "Pull handle towards lower abdomen, lead with elbows.", 
      "Squeeze shoulder blades powerfully at peak pull.", 
      "Slowly extend arms, allow weight to pull shoulders.", 
      "Control weight throughout, avoid jerking movements." 
    ], 
    type: "upper" 
  }, 
  { 
    name: "Donkey Kicks", 
    image: "/public/donkey-kick.gif", 
    descriptions: "A glute-focused move done on all fours, kicking one leg up and back.", 
    details: [ 
      "Start on all fours, hands under shoulders, knees under hips.", 
      "Keep core engaged, back flat, neutral spine.", 
      "Keep one knee bent at 90-degree angle.", 
      "Lift leg back and up towards ceiling, lead with heel.", 
      "Squeeze glute forcefully at the top.", 
      "Avoid arching lower back excessively as you lift.", 
      "Slowly lower leg back, without touching ground." 
    ], 
    type: "legs" 
  }, 
  { 
    name: "Superman Hold", 
    image: "/public/superman-hold.png", 
    descriptions: "A bodyweight move where you lie face down and lift arms and legs to strengthen the lower back.", 
    details: [ 
      "Lie face down, arms extended straight in front.", 
      "Keep legs straight and extended behind you.", 
      "Engage glutes and lower back muscles.", 
      "Lift arms, chest, legs off floor few inches.", 
      "Keep neck neutral, looking down at floor.", 
      "Hold 'superman' position, feel back contraction.", 
      "Slowly lower arms, chest, legs back down." 
    ], 
    type: "core" 
  }, 
  { 
    name: "Reverse Crunches", 
    image: "/public/reverse-crunch.gif", 
    descriptions: "An ab exercise where the hips and knees are curled toward the chest, focusing on lower abs.", 
    details: [ 
      "Lie flat on back, knees bent at 90 degrees.", 
      "Hands by sides, palms down, or under back.", 
      "Engage lower abdominal muscles.", 
      "Slowly curl knees to chest, lift hips slightly.", 
      "Avoid momentum, focus on abdominal contraction.", 
      "Squeeze lower abs at peak of movement.", 
      "Slowly lower hips and legs back to start." 
    ], 
    type: "core" 
  }, 
  { 
    name: "Barbell Bench Press", 
    image: "/public/barbell-bench-press.gif", 
    descriptions: "A chest-focused strength exercise performed by pressing a barbell from chest level while lying on a bench.", 
    details: [ 
      "Lie flat on weight bench, feet flat.", 
      "Grip barbell wider than shoulder-width, over chest.", 
      "Unrack barbell, hold with straight arms above chest.", 
      "Slowly lower barbell to mid-chest, elbows tucked.", 
      "Pause briefly when bar lightly touches chest.", 
      "Push barbell straight up, extend arms fully.", 
      "Control weight throughout lifting and lowering." 
    ], 
    type: "upper" 
  }, 
  { 
    name: "Cable Chest Fly", 
    image: "/public/cablechestfly.png", 
    descriptions: "An isolation exercise using cables to target the chest muscles through a fly motion.", 
    details: [ 
      "Stand in cable cross-over machine, pulleys chest height.", 
      "Grab handle in each hand, step forward for tension.", 
      "Maintain soft bend in elbows, core engaged.", 
      "Bring hands together in front of chest, wide arc.", 
      "Squeeze chest muscles forcefully at center.", 
      "Slowly allow arms to return, feel stretch.", 
      "Control cables throughout, avoid jerky movements." 
    ], 
    type: "upper" 
  }, 
  { 
    name: "Climbers Push-Up", 
    image: "/public/climm.png", 
    descriptions: "A hybrid move combining push-ups and mountain climbers to engage chest, shoulders, and core.", 
    details: [ 
      "Start in high plank, hands under shoulders.", 
      "Ensure body forms straight line, head to heels.", 
      "Perform one push-up, lower chest to floor.", 
      "Push back up to high plank position.", 
      "Immediately, transition into 4-8 mountain climbers.", 
      "Maintain stable core, minimize hip movement.", 
      "Repeat sequence without resting between sets." 
    ], 
    type: "full" 
  }, 
  { 
    name: "Bodyweight Squats", 
    image: "/public/bbbbb.png", 
    descriptions: "A lower-body exercise performed without weights to strengthen legs and glutes.", 
    details: [ 
      "Stand tall, feet shoulder-width apart, toes out.", 
      "Keep chest up, shoulders back, core engaged.", 
      "Initiate squat by pushing hips back, sitting chair.", 
      "Lower hips, bending knees, thighs parallel to floor.", 
      "Ensure knees track with toes, avoid inward collapse.", 
      "Drive through heels and glutes to stand up.", 
      "Maintain smooth, controlled motion throughout squat." 
    ], 
    type: "legs" 
  }, 
  { 
    name: "Sumo Deadlift", 
    image: "/public/sumo.png", 
    descriptions: "A variation of the deadlift with a wider stance, focusing more on the inner thighs and glutes.", 
    details: [ 
      "Approach barbell with wide stance, toes outwards.", 
      "Hinge at hips, bend knees, grip barbell inside knees.", 
      "Keep back flat, chest up, shoulders back.", 
      "Deep breath, brace core, drive through heels to lift.", 
      "Extend hips and knees, stand fully upright, squeeze glutes.", 
      "Avoid hyperextending lower back at top.", 
      "Lower bar slowly, with control, reverse motion." 
    ], 
    type: "legs" 
  }, 
  { 
    name: "Bulgarian Split Squat", 
    image: "/public/19u9uij.png", 
    descriptions: "A single-leg squat with the rear foot elevated, targeting quads and glutes.", 
    details: [ 
      "Stand few feet in front of sturdy bench.", 
      "Place top of one foot onto bench behind.", 
      "Front foot far enough, knee doesn't pass toes.", 
      "Keep torso upright, core engaged for balance.", 
      "Lower hips, bending knees, back knee to floor.", 
      "Descend until front thigh parallel to floor.", 
      "Drive through front heel to push back up." 
    ], 
    type: "legs" 
  }, 
  { 
    name: "Goblet Squat", 
    image: "/public/rrrr.png", 
    descriptions: "A squat variation where a dumbbell or kettlebell is held close to the chest to work the lower body.", 
    details: [ 
      "Stand feet shoulder-width apart, toes slightly out.", 
      "Hold dumbbell vertically or kettlebell at chest.", 
      "Keep elbows tucked, chest up throughout movement.", 
      "Initiate squat by pushing hips back, bending knees.", 
      "Lower into full squat, elbows inside knees.", 
      "Maintain proud chest, upright torso.", 
      "Drive through heels to stand back up." 
    ], 
    type: "legs" 
  }, 
  { 
    name: "Cable Tricep Pushdown", 
    image: "/public/sdknknd.png", 
    descriptions: "A cable machine exercise targeting the triceps by pushing a bar downward.", 
    details: [ 
      "Stand facing cable machine, pulley set chest height.", 
      "Attach rope, straight bar, or V-bar handle.", 
      "Grip attachment, palms down (bar) or neutral (rope).", 
      "Keep elbows tucked close to sides, slightly bent.", 
      "Push attachment straight down towards thighs, extend arms.", 
      "Squeeze triceps forcefully at the bottom.", 
      "Slowly allow arms to return, controlling weight." 
    ], 
    type: "arms" 
  }, 
  { 
    name: "Face Pulls", 
    image: "/public/face.png", 
    descriptions: "A shoulder and upper back movement done with cables, great for posture and rotator cuffs.", 
    details: [ 
      "Set cable pulley chest height, attach rope handle.", 
      "Grasp rope overhand, step back for tension.", 
      "Keep core engaged, slight bend in knees.", 
      "Pull rope towards face, flare elbows wide.", 
      "Squeeze shoulder blades powerfully at end of pull.", 
      "Focus on external rotation in your shoulders.", 
      "Slowly extend arms back to starting position." 
    ], 
    type: "upper" 
  }, 
  { 
    name: "Chest Dips", 
    image: "/public/sschest.png", 
    descriptions: "An upper-body move using parallel bars to target the chest, triceps, and shoulders.", 
    details: [ 
      "Grip parallel dip bars, support body with straight arms.", 
      "Lean forward slightly, tuck chin to chest.", 
      "Lower body bending elbows, allow them to flare.", 
      "Descend until shoulders below elbows or chest level.", 
      "Feel the stretch across your chest.", 
      "Push powerfully through bars to return to start.", 
      "Focus on squeezing your chest muscles." 
    ], 
    type: "upper" 
  }, 
  { 
    name: "Inchworms", 
    image: "/public/inch.png", 
    descriptions: "A dynamic stretch that strengthens the core and shoulders while improving flexibility.", 
    details: [ 
      "Stand tall, feet hip-width apart, knees slightly bent.", 
      "Bend at waist, place hands on floor.", 
      "Keeping legs straight, walk hands forward.", 
      "Continue walking hands to high plank position.", 
      "Ensure core engaged, body forms straight line.", 
      "From plank, slowly walk feet towards hands.", 
      "Continue walking feet to starting standing position." 
    ], 
    type: "full" 
  }, 
  { 
    name: "Zottman Curl", 
    image: "/public/jjjjj.png", 
    descriptions: "A bicep and forearm exercise combining a regular curl and reverse curl in one move.", 
    details: [ 
      "Stand holding dumbbells, palms facing forward.", 
      "Perform standard bicep curl, bring dumbbells to shoulders.", 
      "At very top, rotate wrists, palms face down.", 
      "Slowly lower dumbbells back down, palms facing down.", 
      "This reverse grip targets brachialis and brachioradialis.", 
      "At bottom, rotate wrists back, palms face forward.", 
      "Maintain controlled movement, curling and lowering." 
    ], 
    type: "arms" 
  }, 
  { 
    name: "Farmer’s Carry", 
    image: "/public/farnme.png", 
    descriptions: "A strength and grip endurance move where you walk holding heavy weights in both hands.", 
    details: [ 
      "Select two heavy dumbbells or kettlebells.", 
      "Stand tall, grip weights firmly, hang at sides.", 
      "Keep shoulders back and down, chest up, core engaged.", 
      "Walk designated distance, maintaining good posture.", 
      "Avoid leaning torso or weights swinging.", 
      "Focus intensely on maintaining your grip.", 
      "Control breathing, keep steps steady." 
    ], 
    type: "full" 
  }, 
  { 
    name: "Cable Lateral Raise", 
    image: "/public/cakjckjsd.png", 
    descriptions: "A side shoulder exercise using a cable machine for constant tension on the delts.", 
    details: [ 
      "Stand sideways to low cable pulley, grab handle.", 
      "Keep arm straight, slight elbow bend, handle crosses body.", 
      "Keep core engaged, maintain upright posture.", 
      "Raise arm directly out to side, controlled arc.", 
      "Lift until arm parallel with shoulders, focus side deltoid.", 
      "Slowly lower arm back, resisting cable pull.", 
      "Ensure constant tension on deltoid throughout movement." 
    ], 
    type: "shoulder" 
  }, 
  { 
    name: "Chest Squeeze Push-Up", 
    image: "/public/ksjdlkajsldkj.png", 
    descriptions: "A push-up variation that emphasizes inner chest activation by squeezing a dumbbell or ball between hands.", 
    details: [ 
      "Start in high plank, place dumbbell or ball between hands.", 
      "Position hands either side of object, press firmly.", 
      "Actively squeeze dumbbell or ball throughout exercise.", 
      "Lower chest towards floor by bending elbows.", 
      "Maintain squeeze to intensify inner chest activation.", 
      "Push back up to starting position, constant pressure.", 
      "Focus on inner chest muscles working hard." 
    ], 
    type: "upper" 
  }, 
  { 
    name: "V-Ups", 
    image: "/public/lsdklsndks.png", 
    descriptions: "An advanced core move where arms and legs meet in a V shape while engaging abs.", 
    details: [ 
      "Lie flat on back, legs straight, arms overhead.", 
      "Keep legs and arms straight throughout movement.", 
      "Engage your core forcefully.", 
      "Lift torso and legs, bring them together.", 
      "Aim to touch hands to toes, form 'V'.", 
      "Briefly hold top, feel intense ab contraction.", 
      "Slowly lower torso and legs with control." 
    ], 
    type: "core" 
  }, 
  { 
    name: "Flutter Kicks", 
    image: "/public/lkasjdlkjpoq.png", 
    descriptions: "A core conditioning move involving alternating leg kicks while lying on your back.", 
    details: [ 
      "Lie flat on back, legs straight.", 
      "Hands under lower back for support (optional).", 
      "Lift both legs slightly off floor (6-12 inches).", 
      "Keep legs straight, rapidly alternate lifting one higher.", 
      "Motion small and controlled, like fluttering kick.", 
      "Crucially, lower back remains pressed firmly to floor.", 
      "Continue alternating kicks for desired duration." 
    ], 
    type: "core" 
  }, 
  { 
    name: "Hollow Body Hold", 
    image: "/public/opewupqowi.png", 
    descriptions: "A gymnastics core stability move where you hold a curved body position off the ground.", 
    details: [ 
      "Lie flat on back, arms extended overhead.", 
      "Keep legs straight and together.", 
      "Engage core, press lower back firmly to floor.", 
      "Lift shoulders and head slightly, look towards toes.", 
      "Simultaneously lift legs a few inches off floor.", 
      "Body forms slight 'rocker' or 'banana' shape.", 
      "Hold rigid, curved position, breathing shallowly." 
    ], 
    type: "core" 
  }, 
  { 
    name: "Step-Ups", 
    image: "/public/ppp.png", 
    descriptions: "A lower-body exercise where you step up and down on a raised platform to engage glutes and legs.", 
    details: [ 
      "Stand facing sturdy box, bench, or step.", 
      "Place one entire foot firmly on elevated surface.", 
      "Drive through heel of elevated foot to step up.", 
      "Bring trailing leg up, stand fully upright on box.", 
      "Step back down with same foot you led.", 
      "Return both feet to floor before repeating.", 
      "Alternate leading legs or complete all reps." 
    ], 
    type: "legs" 
  }, 
  { 
    name: "Cable Crunches", 
    image: "/public/pppbdjh.png", 
    descriptions: "An ab exercise using a cable machine to add resistance during a crunch motion.", 
    details: [ 
      "Kneel in front of high cable pulley, rope attachment.", 
      "Grasp rope ends, hands behind head or ears.", 
      "Keep hips still, core engaged.", 
      "Crunch torso downward, rounding back, contracting abs.", 
      "Focus on pulling with abdominal muscles, not arms.", 
      "Squeeze abs forcefully at bottom of movement.", 
      "Slowly allow cable to pull torso back up." 
    ], 
    type: "core" 
  }, 
  { 
    name: "Incline Dumbbell Press", 
    image: "/public/qtqt.png", 
    descriptions: "A chest exercise targeting the upper pecs using dumbbells on an incline bench.", 
    details: [ 
      "Set adjustable bench to incline angle (30-45 degrees).", 
      "Lie on incline bench, hold dumbbell in each hand.", 
      "Position dumbbells over upper chest, palms forward.", 
      "Lower dumbbells slowly towards outer upper chest.", 
      "Feel the stretch in your upper pectorals.", 
      "Press dumbbells straight up, squeeze upper chest.", 
      "Control weight throughout lifting and lowering." 
    ], 
    type: "upper" 
  }, 
  { 
    name: "Reverse Lunges", 
    image: "/public/ioiwp.png", 
    descriptions: "A leg exercise where you step backward into a lunge, emphasizing balance and glute activation.", 
    details: [ 
      "Stand tall, feet hip-width apart, hands on hips.", 
      "Take large step backward with one leg.", 
      "Lower hips until both knees bend at 90 degrees.", 
      "Front knee directly above ankle, not past toes.", 
      "Back knee should hover just above the floor.", 
      "Push off powerfully through front heel to stand.", 
      "Alternate legs, maintaining balance and control." 
    ], 
    type: "legs" 
  }, 
  { 
    name: "Sled Push", 
    image: "/public/bbmcbxmcb.png", 
    descriptions: "A high-intensity full-body move involving pushing a weighted sled across the floor.", 
    details: [ 
      "Load a sled with your desired weight.", 
      "Approach sled, grip vertical or horizontal handles.", 
      "Lean into sled, low athletic stance, back straight.", 
      "Drive powerfully through legs, short, quick steps.", 
      "Maintain consistent forward lean, push with body.", 
      "Focus on generating force from glutes and quads.", 
      "Continue pushing sled for designated distance." 
    ], 
    type: "full" 
  }, 
  { 
    name: "Wall Ball Throws", 
    image: "/public/kskdne.png", 
    descriptions: "A power and cardio move where a medicine ball is thrown against the wall while squatting.", 
    details: [ 
      "Stand facing wall, arm's length, hold medicine ball.", 
      "Perform full squat, descending deep with good form.", 
      "Explode upwards from squat, throw ball to target.", 
      "Catch rebounding ball, immediately absorb impact.", 
      "Immediately descend into next squat.", 
      "Maintain fluid, continuous motion, squat and throw.", 
      "Engage entire body for maximum power." 
    ], 
    type: "cardio" 
  }, 
  { 
    name: "Bear Crawls", 
    image: "/public/lsjks.png", 
    descriptions: "A full-body bodyweight move involving crawling on all fours to build coordination and strength.", 
    details: [ 
      "Start on all fours, hands under shoulders, knees under hips.", 
      "Lift knees slightly off floor, hovering inches.", 
      "Keep back flat, core engaged to prevent rocking.", 
      "Move forward, advance right hand and left foot.", 
      "Then, move left hand and right foot forward.", 
      "Maintain low, controlled crawling motion, hips stable.", 
      "Continue crawling for desired distance or duration." 
    ], 
    type: "full" 
  }, 
  { 
    name: "Box Squats", 
    image: "/public/cnnne.png", 
    descriptions: "A squat variation where you lower onto a box or bench, helping with depth control and glute activation.", 
    details: [ 
      "Set up sturdy box or bench behind you.", 
      "Stand feet shoulder-width apart, chest up, core engaged.", 
      "Initiate squat by pushing hips back, sitting down.", 
      "Lower hips until glutes lightly touch box.", 
      "Maintain tension in leg and glute muscles.", 
      "Drive through heels and glutes to stand up.", 
      "Ensure knees track in line with toes." 
    ], 
    type: "legs" 
  }, 
  { 
    name: "Barbell Row", 
    image: "/public/bcemekj.png", 
    descriptions: "A compound back exercise where you row a barbell toward your lower chest.", 
    details: [ 
      "Stand feet hip-width apart, barbell over mid-foot.", 
      "Hinge at hips, push glutes back, torso parallel.", 
      "Maintain flat back, slight knee bend, look forward.", 
      "Grip barbell wider than shoulder-width, overhand grip.", 
      "Pull barbell up to lower chest, squeeze shoulder blades.", 
      "Keep elbows tucked close to body as you pull.", 
      "Lower barbell slowly with control to start." 
    ], 
    type: "upper" 
  }, 
  { 
    name: "Scissor Kicks", 
    image: "/public/bbjcbsjk.png", 
    descriptions: "A core workout where legs move in a crisscross motion while lying on your back.", 
    details: [ 
      "Lie flat on back, legs straight.", 
      "Hands under lower back for support (optional).", 
      "Lift both legs slightly off floor (6-12 inches).", 
      "Keep legs straight, cross one leg over other.", 
      "Immediately reverse motion, cross other leg over.", 
      "Maintain small, controlled range of motion in legs.", 
      "Crucially, lower back pressed firmly to floor." 
    ], 
    type: "core" 
  }, 
  { 
    name: "Hip Thrusts", 
    image: "/public/kk1.png", 
    descriptions: "A glute-building move where you thrust hips upward against resistance using a bench.", 
    details: [ 
      "Sit on floor, upper back against bench edge.", 
      "Bend knees, feet flat on floor, hip-width apart.", 
      "Barbell or dumbbell across hips (optional, pad).", 
      "Drive through heels, engage glutes, lift hips.", 
      "Lift until body forms straight line, shoulders to knees.", 
      "Squeeze glutes powerfully at very top.", 
      "Lower hips slowly with control to start." 
    ], 
    type: "legs" 
  }, 
  { 
    name: "Machine Chest Press", 
    image: "/public/cmakh2.png", 
    descriptions: "A machine-based chest exercise mimicking the bench press with guided motion.", 
    details: [ 
      "Sit on machine, adjust seat, handles mid-chest.", 
      "Grip handles firmly with overhand grip.", 
      "Keep back pressed against pad, feet flat.", 
      "Engage chest, push handles forward, arms extended.", 
      "Squeeze chest muscles forcefully at peak contraction.", 
      "Slowly allow handles to return, control weight.", 
      "Ensure full stretch before next push." 
    ], 
    type: "upper" 
  }, 
  { 
    name: "Leg Press", 
    image: "/public/6s6.png", 
    descriptions: "A resistance machine workout that targets the quads, hamstrings, and glutes by pushing a platform away with your legs.", 
    details: [ 
      "Sit on leg press machine, feet shoulder-width apart.", 
      "Ensure lower back pressed firmly against seat.", 
      "Release safety catches, platform moves freely.", 
      "Slowly lower platform, bending knees to 90 degrees.", 
      "Push platform away, extending legs, drive heels.", 
      "Extend legs fully, avoid locking knees out.", 
      "Control weight, return platform slowly to start." 
    ], 
    type: "legs" 
  }, 
  { 
    name: "Machine Lat Pulldown", 
    image: "/public/33nbm.png", 
    descriptions: "A back-building move where you pull a bar down toward the chest while seated.", 
    details: [ 
      "Sit on lat pulldown machine, adjust knee pad.", 
      "Reach up, grip wide bar, overhand, wide.", 
      "Lean back slightly, chest up, core engaged.", 
      "Pull bar down to upper chest, lead with elbows.", 
      "Squeeze shoulder blades powerfully at bottom.", 
      "Slowly allow bar to ascend, feel stretch.", 
      "Control weight throughout entire range of motion." 
    ], 
    type: "upper" 
  }, 
  { 
    name: "Cable Front Raise", 
    image: "/public/skn1.png", 
    descriptions: "An isolation shoulder movement using cables to target the front delts.", 
    details: [ 
      "Stand facing low cable pulley, grab handle.", 
      "Keep arm straight, not locked, handle in front.", 
      "Maintain upright posture, core engaged.", 
      "Raise arm forward, straight up to shoulder height.", 
      "Focus on engaging front head of shoulder.", 
      "Avoid shrugging shoulders or using momentum.", 
      "Slowly lower arm back to starting position." 
    ], 
    type: "shoulder" 
  }, 
  { 
    name: "Side Lunges", 
    image: "/public/32n.png", 
    descriptions: "A lower-body move that stretches and strengthens the legs by lunging sideways.", 
    details: [ 
      "Stand feet hip-width apart, hands on hips.", 
      "Take large step out to one side.", 
      "Bend stepping knee, push hips back, sitting down.", 
      "Keep chest up, back straight, knee tracks toes.", 
      "Feel stretch in inner thigh of straight leg.", 
      "Push powerfully off stepping foot to return.", 
      "Alternate legs, maintaining balance and control." 
    ], 
    type: "legs" 
  }, 
  { 
    name: "Bicycle Crunches", 
    image: "/public/ske.png", 
    descriptions: "A core exercise involving pedaling motions with legs while crunching side to side.", 
    details: [ 
      "Lie on back, hands gently behind head, elbows wide.", 
      "Lift shoulders and feet off floor, engage core.", 
      "Bring one knee to chest, opposite elbow to knee.", 
      "Extend other leg straight out at same time.", 
      "Smoothly, rapidly alternate sides, mimicking pedaling.", 
      "Focus on twisting torso, bringing shoulder to knee.", 
      "Maintain constant tension in abdominal muscles." 
    ], 
    type: "core" 
  }, 
  { 
    name: "Rope Slams", 
    image: "/public/sooiwo2.png", 
    descriptions: "An explosive full-body cardio exercise using battle ropes for power and endurance.", 
    details: [ 
      "Stand facing anchor, hold battle rope in each hand.", 
      "Feet shoulder-width apart, athletic stance.", 
      "Raise ropes overhead, fully extend arms.", 
      "Forcefully slam ropes down, engage core, use body.", 
      "Aim to create powerful wave motion.", 
      "Immediately bring ropes back overhead for next slam.", 
      "Maintain continuous, explosive rhythm, power and speed." 
    ], 
    type: "cardio" 
  }, 
  { 
    name: "Lying Leg Curl", 
    image: "/public/6763iuh.png", 
    descriptions: "A hamstring isolation move performed on a machine by curling the legs toward the body.", 
    details: [ 
      "Lie face down on machine, heels under pad.", 
      "Grip handles on machine for stability.", 
      "Keep hips pressed firmly into bench.", 
      "Engage hamstrings, slowly curl legs to glutes.", 
      "Squeeze hamstrings forcefully at top of contraction.", 
      "Hold briefly, then slowly lower legs back.", 
      "Control weight throughout, avoid rapid drops." 
    ], 
    type: "legs" 
  }, 
  { 
    name: "Standing Calf Raises", 
    image: "/public/knme78.png", 
    descriptions: "A lower leg exercise where you lift your heels off the ground to work the calves.", 
    details: [ 
      "Stand feet hip-width apart, flat surface or step.", 
      "If using dumbbells, hold one in each hand.", 
      "Keep body upright, core engaged.", 
      "Rise onto balls of feet, lift heels high.", 
      "Squeeze calf muscles powerfully at top.", 
      "Slowly lower heels, feel stretch in calves.", 
      "If on step, lower heels below edge." 
    ], 
    type: "legs" 
  }, 
  { 
    name: "Medicine Ball Slam", 
    image: "/public/92knc.png", 
    descriptions: "A power movement involving lifting and forcefully slamming a medicine ball to the floor.", 
    details: [ 
      "Stand feet shoulder-width apart, holding medicine ball.", 
      "Lift medicine ball overhead, fully extend arms.", 
      "Engage core, powerfully slam ball to floor.", 
      "Use entire body, bending knees and hips.", 
      "Aim to slam ball with maximum force.", 
      "Squat down to pick up ball controlled.", 
      "Immediately transition into next repetition, intensity." 
    ], 
    type: "full" 
  }, 
  { 
    name: "Tire Flips", 
    image: "/public/ncmn21.png", 
    descriptions: "A strength and conditioning exercise involving flipping a heavy tire for explosive power.", 
    details: [ 
      "Approach heavy tire, feet in wide stance.", 
      "Place hands under tire's edge, mixed grip.", 
      "Get into low squat, back straight, chest up.", 
      "Explode upwards, drive legs, push with chest.", 
      "As tire tips, quickly switch hand position to push.", 
      "Push through tire's top to complete flip.", 
      "Walk to other side, repeat process." 
    ], 
    type: "full" 
  }, 
  { 
    name: "Windshield Wipers", 
    image: "/public/1kxnkksn20.png", 
    descriptions: "An ab move where your legs rotate side to side like wipers while lying on your back.", 
    details: [ 
      "Lie flat on back, arms extended to T-shape.", 
      "Keep legs straight, lift them straight up.", 
      "Keep legs together, slowly lower to one side.", 
      "Engage core forcefully, prevent lower back arch.", 
      "Lower legs only as far as opposite shoulder allows.", 
      "Bring legs back to center using core strength.", 
      "Lower them to opposite side, maintaining control." 
    ], 
    type: "core" 
  } 
]