import React from 'react'
import { useState, useEffect } from 'react'
import { fbAdd, fbGet } from '../Config/Firebasemethod';

const Tasks = (props: any) => {
    const { Screen } = props;
    const [model, setModel] = useState<any>({})
    const [tasllist, setTaskList] = useState<any>([])


    const addTask = () => {
        fbAdd('tasks', model)
            .then((res: any) => {
                console.log(res);
                setModel({});
                getTask();
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const getTask = () => {
        fbGet('tasks')
            .then((res: any) => {
                console.log(res);
                setTaskList([...res]);
            })
            .catch((err) => {
                console.log(err);
            }
            )
    }

    useEffect(() => {
        getTask();
    }, []);
    return (
        <div>
            Tasks
        <div className='row'>
            <div className='col-4'>
assdads
            </div>

            <div className='col-8'>
                addssdsad
                </div>
        </div>

        </div>
    )
}

export default Tasks