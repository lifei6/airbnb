import Indictor from '@/base-ui/indictor'
import classNames from 'classnames'
import React, { memo ,useState} from 'react'
import { DemoWrapper } from './style'

const Demo = memo(() => {
    const [curIndex,setCurIndex] = useState(0)
    const names = ['圆点1','圆点2','圆点3','圆点4','圆点5','圆点2','圆点3','圆点4','圆点5','test']
    // 1.上下按钮点击事件处理
    function btnClickHandle(isNext){
        let newIndex = curIndex
        newIndex = isNext?newIndex+1:newIndex-1
        // 处理左边索引超出
        if(newIndex<0)newIndex=names.length-1
        // 处理右边索引超出
        if(newIndex>names.length-1)newIndex=0
        // 设置新索引
        setCurIndex(newIndex)
    }
    // 2.指示器中元素点击事件处理
    function elClickHandle(index){
        setCurIndex(index)
    }
    return (
    <DemoWrapper>
        <div className='control'>
            <button onClick={e=>btnClickHandle(false)}>上一个</button>
            <button onClick={e=>btnClickHandle(true)}>下一个</button>
        </div>
        <div className='indictor'>
            {/* 需传入两个参数（当前索引，指示器宽度），和结构 */}
            <Indictor curIndex={curIndex} indictorWidth={100}>
                {
                    names?.map((item,index)=>{
                        return <div key={index} onClick={e=>elClickHandle(index)} className={classNames('item',{active:index===curIndex})}></div>
                    })
                }
            </Indictor>
        </div>
    </DemoWrapper>
  )
})

export default Demo