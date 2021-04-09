let aryFriends = [
    {
        name: "Ahmed",
        photo: "https://www.istockphoto.com/photo/smiling-man-gm580109640-99759761",
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
     {
        name: "John",
        photo: "https://www.istockphoto.com/photo/frontal-male-passport-photo-isolated-on-white-background-eu-standardization-gm1153469287-313287873",
        scores: [
            2,
            4,
            1,
            4,
            2,
            5,
            4,
            2,
            3,
            1
        ]
    },
    {
        name: "Jane",
        photo: "https://www.istockphoto.com/photo/official-portrait-of-a-blonde-woman-gm515596766-88569207",
        scores: [
            2,
            4,
            3,
            3,
            5,
            4,
            5,
            3,
            4,
            2
        ]
    },
    {
        name: "Paola",
        photo: "https://www.istockphoto.com/photo/hispanic-young-woman-looking-at-the-camera-gm1161639159-318370544",
        scores: [
            2,
            4,
            3,
            3,
            2,
            3,
            1,
            2,
            1,
            2            
        ]
    }
    
];

let singleFriend = {
        name: "Jimmy",
        photo: "https://www.istockphoto.com/photo/hispanic-young-woman-looking-at-the-camera-gm1161639159-318370544",
        scores: [
            3,
            4,
            3,
            4,
            5,
            2,
            3,
            4,
            5,
            2
        ]
    }



function findClosestMatch(objFriend) {
    let closestMatchIndex = -1
    let smallestDifference = 51
    for (let i = 0; i < aryFriends.length; i++) {
            let difference = 0
            //this loop is only to sum all the differences
            for (let j = 0; j < aryFriends[i].scores.length; j++) {
                const element = aryFriends[i].scores[j];
                difference += Math.abs(element - objFriend.scores[j])
            }
            if (difference < smallestDifference) {
                smallestDifference = difference;
                closestMatchIndex = i
            }
            console.log(difference)
            console.log(smallestDifference)
            
    }
    console.log(aryFriends[closestMatchIndex])
    return aryFriends[closestMatchIndex]

};

findClosestMatch(singleFriend)