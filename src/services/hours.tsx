import db from "../config/db"

const hours = {

    getActTime: function () {

        var date = new Date()
        var timeInfo = {
            date: date,
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            hour: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
            weekDay: date.getDay(),
        }

        return timeInfo

    },

    convertToSeconds: function (hours: any){
        var arr: Array<String> = hours.split(':')
        var convertedHours: any = (+arr[0]) * 60 * 60 + (+arr[1]) * 60 + (+arr[2])
        return convertedHours
    },

    compareDate: function (){

        var result = {
            open: false
        }
        var currentTime = this.getActTime()
        var weekDay: string = db.weekDay[currentTime.weekDay]
        var openingHours: any = db.openingHours[weekDay]
        
        if(openingHours != 'Closed'){
            const allToSeconds = {
                openHours: this.convertToSeconds(openingHours[0]),
                closeHours: this.convertToSeconds(openingHours[1]),
                actHours: this.convertToSeconds(`${currentTime.hour}:${currentTime.minutes}:${currentTime.seconds}`)
            }

            if(allToSeconds.actHours > allToSeconds.openHours && allToSeconds.actHours < allToSeconds.closeHours) {
                result.open = true
            }else{
                result.open = false
            }
        }else{
            result.open = false
        }
        
        return result.open

    },

    openingHoursList: function (){

        var arr = []

        var day: string
        var index = 0
        var element: any
        for (day in db.openingHours){

            var item = db.openingHours[day]
            var weekDay = db.weekDayPtBr[index]
            
            element = typeof item == 'string' ? 
                <div className="d-flex gap-2">
                    <div>{weekDay}:</div>
                    <b className="text-danger"> Fechado </b>
                </div> 
            : 
                <div className="d-flex gap-2">
                    <div>{weekDay}:</div>
                    <b>{item[0].slice(0, 5) +  "-" + item[1].slice(0, 5)}</b>
                </div>

            arr.push(element)
            index++

        }

        return arr

    }

}

export default hours