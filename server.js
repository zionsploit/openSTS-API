import { app } from "./app";

app.listen(app.get('port'), () => {
    console.log(`Server Running in Port ${app.get('port')}`)
})
