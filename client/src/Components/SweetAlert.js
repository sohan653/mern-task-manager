import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export function deleteAlert(id){
     
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`/task/${id}`)
          .then(data=>{
            // Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )
            toast.success('Your task has been deleted')
              window.location.reload(true);
          })
          .catch(()=>{
            toast.error('cannot delete the task')
          })
         
         
        }
      })
};

export function updateTask(id,status){
    return Swal.fire({
        title: 'Change Status',
        input: 'select',
        inputOptions: {new: 'new', finished: 'finished', processing: 'processing', cancelled: 'cancelled'},
        inputValue:status,
        
    }).then((result)=>{
     return axios.post(`/task/${id}`,{status:result.value})
      .then(data=>{
       return data
      })
    })
}