import { AbstractControl, FormGroup } from "@angular/forms";

export function CustomValidators(month : String) {
    return (formGroup: FormGroup) => {
        // console.log(formGroup.controls.date.value);
        // console.log(formGroup.controls.month.value);
        // console.log(formGroup.controls.year.value);
        const checkDate = formGroup.controls['date'];
        if (formGroup.controls.month.value == 'February') {
            if (formGroup.controls.year.value % 4 == 0) {
                //leap year feb<=29
                if (formGroup.controls.date.value > 29) {
                    formGroup.controls['date'].setErrors({ confirmedValidator: true });
                }
            }
            else if (formGroup.controls.date.value > 28) {
                checkDate.setErrors({ confirmedValidator: true });
            }
        }
        else if (formGroup.controls.month.value == 'April' || formGroup.controls.month.value == 'June' || formGroup.controls.month.value == 'September' || formGroup.controls.month.value == 'November') {
            if (formGroup.controls.date.value > 30) {
                checkDate.setErrors({ confirmedValidator: true });
            }
            else {
                checkDate.setErrors(null);
            }
        }
        else {
            checkDate.setErrors(null);
        }
    }
}
