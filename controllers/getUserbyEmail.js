const { employees } = require("../models/employees")

exports.get_userBy_email={
    async user_by_email(email){
        let employee_details=await employees.findOne({
            where:{email:email}
        })
        return employee_details;
    }
}