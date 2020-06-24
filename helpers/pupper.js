module.exports = {
    determineDailyFood: info => {
        const {
            age,
            weight
        } = info;
        let ozOfFoodPerDay;

        // TODO: make this account for pregnant dogs, puppies and older dogs!

        //  for adult dogs
        if (age > 1) {
            // TODO: determine a dogs food in lbs each day based on weight
            // less than 3 lbs ~ 2.4oz
            // 6 lbs ~ 4oz
            // 10 lbs ~ 6oz
            // 15 lbs ~ 8oz
            // 20 lbs ~ 10.4oz
            // 30 lbs ~ 14oz
            // 40 lbs ~ 18oz
            // 50 lbs ~ 20.8oz
            // 60 lbs ~ 24oz
            // 70 lbs ~ 28oz
            // 80 lbs ~ 30oz
            // 90 lbs ~ 34oz
            // 100 lbs ~ 36oz
            // 2.4oz for each 10 lbs over 100 lbs!
        }

        // return oz of food per day
        // TODO: dummy return for now
        return 100;
    }
};