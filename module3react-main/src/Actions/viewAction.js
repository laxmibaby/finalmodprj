import axios from 'axios'

export const getBills = () => {
    return (dispatch) =>{
        axios.get('http://localhost:9090/bills/all')
        .then(response => {
            console.log(response.data);
            dispatch ({
            type:'LIST_BILLS',
            payload:response.data
            })
        })
        .catch(error => {
            console.log(error);
        });
    } 
}

export const setBills = billBody => {
    return {
        type:'SET_BILLS',
        payload:billBody
    }
}

export const getBillById = billId => {
    return (dispatch) =>{
        axios.get(`http://localhost:9090/bills/${billId}`)
        .then(response => {
            console.log(response.data);
            dispatch({
                type:'GET_BY_BILLID',
                payload:response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
       
    }
}

export const getBillByCustId = customerId => {
    return (dispatch) =>{
        axios.get(`http://localhost:9090/bills/byCustId/${customerId}`)
        .then(response => {
            console.log(response.data);
            dispatch({
                type:'GET_BY_CUSTID',
                payload:response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
       
    }
}

export const getBillByStatus = status => {
    return (dispatch) =>{
        axios.get(`http://localhost:9090/bills/byStatus/${status}`)
        .then(response => {
            console.log(response.data);
            dispatch({
                type:'GET_BY_STATUS',
                payload:response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
       
    }
}

export const getBillByDate = date => {
    return (dispatch) =>{
        axios.get(`http://localhost:9090/bills/byDate/${date}`)
        .then(response => {
            console.log(response.data);
            dispatch({
                type:'GET_BY_DATE',
                payload:response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
       
    }
}

export const createBill = (custID,billObj) => {
    return (dispatch) => {
        axios.post(`http://localhost:9090/bills/${custID}`,billObj)
        .then(response=>{
            console.log(response.data);
            console.log(billObj);
            dispatch({
                type:'CREATE_BILL',
                payload:response.data
            })     
        })
        .catch(error=>{
            console.log(error);
        })
    }
}

export const deleteBill = billNum => {
    return (dispatch) => {
        axios.delete(`http://localhost:9090/bills/${billNum}`)
        .then(response=>{
            console.log(response);
            dispatch({
                type:'DELETE_BILL',
                payload:response.data
            })
        })
        .catch(error=>{
            console.log(error);
        })
    }
}