import { Button, Col, Divider, Row } from 'antd';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import userWithoutPhoto from '../../img/images.png';
import s from './dialogs.module.css';




export const Dialogs: React.FC = React.memo(({ }) => {

    const divRef = useRef<HTMLHeadingElement>(null)
    const scrollBtnRef = useRef<HTMLHeadingElement>(null)
    const chatRef = useRef<HTMLHeadingElement>(null)
    const massageArray: Array<chatMassageType> = []
    const [massages, setMassages] = useState<Array<chatMassageType>>(massageArray)
    const allMassages = massages.map((m) => <Massage key={m.userId} name={m.userName} photo={m.photo} massage={m.message} />)

    const [socketUrl, setSocketUrl] = useState<string | null>('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

    const {
        sendMessage,
        sendJsonMessage,
        lastMessage,
        lastJsonMessage,
        readyState,
        getWebSocket
    } = useWebSocket(socketUrl, {
        onOpen: () => {
            setSocketUrl('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

        },
        onClose: () => {
            getWebSocket()?.close()
        },
        shouldReconnect: () => true,
        retryOnError: true,
        reconnectAttempts: 100,
        reconnectInterval: 3000,
    });





    const onSend = (values: { massageText: string }) => {
        sendMessage(values.massageText)
        setTimeout(() => {
            divRef.current?.scrollIntoView({ behavior: 'smooth' })
        }, 100)

    }

    chatRef.current?.addEventListener('scroll', () => {
        if (scrollBtnRef.current !== null) {
            scrollBtnRef.current.style.visibility = 'visible'
        }

        scrollBtnRef.current?.addEventListener('click', () => {
            divRef.current?.scrollIntoView({ behavior: 'smooth' })

            setTimeout(() => {
                if (scrollBtnRef.current !== null) {
                    scrollBtnRef.current.style.visibility = 'hidden'
                }

            }, 1000)
        })
    })



    useEffect(() => {
        if (lastJsonMessage !== null) {
            setMassages((prevMassages) => [...prevMassages, ...lastJsonMessage])
        }

    }, [lastMessage, setMassages])

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];





    return (
        <>
            <Row >
                <Col span={24} >
                    <div style={{ height: '400px', overflowY: 'auto' }} ref={chatRef}>
                        {allMassages}
                        <div style={{ visibility: 'hidden' }} ref={divRef} />
                    </div>
                    <div className={s.scrollBtn}>
                        <Button ref={scrollBtnRef}  >To New Massages</Button>
                    </div>

                </Col>
                <Col span={12} >
                    <div>
                        <Formik
                            enableReinitialize
                            initialValues={{ massageText: '' }}
                            onSubmit={onSend}
                        >
                            {() => (
                                <Form>
                                    <Row>
                                        <Field type="textarea" name="massageText" placeholder="Write your massage" className={s.massageInput} />
                                        <button type="submit" disabled={readyState !== ReadyState.OPEN}>Send Massage</button>
                                    </Row>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </Col>
            </Row>
        </>
    )

})


export default Dialogs

const Massage: React.FC<{
    name: string, photo: string, massage: string
}> = ({ name, photo, massage }) => {

    return (
        <div>
            {!photo ? <img src={userWithoutPhoto} alt="" className={s.massagePhoto} /> : <img src={photo} alt="" className={s.massagePhoto} />}
            <span>{name}</span>
            <div>{massage}</div>
            <Divider />
        </div>
    )
}





type chatMassageType = {
    message: string
    photo: string
    userId: number
    userName: string
}