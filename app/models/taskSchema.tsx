
import mongoose, {Schema} from "mongoose";
//structure of data into the database
const taskSchema = new Schema(
    {
    name: String,
    isChecked: Boolean,
    },
    {
        timestamps:true,

    },

);

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);

export default Task;