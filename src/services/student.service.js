
const BASEURL = "http://student-service-kind-gorilla.cfapps.io";
const ENDPOINTS = {
    getStudents: '/student'
};

export class StudentService {
    getStudents = async () => {
        try {
            const request = await fetch(`${BASEURL}${ENDPOINTS.getStudents}`);

            if (request.status !== 200) {
                throw { status: request.status };
            }

            const json = await request.json();
            return json;
        } catch (exception) {
            console.log(exception);
            return exception;
        }
    };
}