class SlothMachine {
    constructor()
    {
        this.coin= 0;
    }
    
    play()
    {
        this.coin++;

        let boolean1= Math.floor(Math.random() * (2) + 0) === 0 ? false : true;
        let boolean2= Math.floor(Math.random() * (2) + 0) === 0 ? false : true;
        let boolean3= Math.floor(Math.random() * (2) + 0) === 0 ? false : true;

        if(boolean1 && boolean2 && boolean3)
        {
            console.log("Congratulations!!!. You won "+this.coin+" coins!!");
            this.coin= 0;
        }
        else
        {
            console.log("Good luck next time!!");
        }
    }
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"