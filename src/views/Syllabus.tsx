
import tw from 'twin.macro';

const Wrapper = tw.main`mx-auto w-full max-w-screen-lg px-8 py-12`;
const Title = tw.h2`text-2xl text-slate-700`;

const List = tw.h3`text-xl font-bold text-slate-700 mt-6`;

const SectionTitle = tw.div`text-lg font-bold text-slate-700 mt-6`;

const Content = tw.p`text-base text-slate-600 ml-4`;


export default function Syllabus(){
    
    return(
        <Wrapper>
            <Title>人工智能聊天机器人编程入门课程大纲</Title>
            <List>第1周：编程语言入门 </List>
                <SectionTitle>•	讲座主题：</SectionTitle>
                    <Content>o	Python和Java编程语言概述</Content>
                    <Content>o	基本语法、变量和数据类型</Content>
                    <Content>o	输入和输出操作</Content>
                    <Content>o	控制结构：if语句和循环（for和while）</Content>

                <SectionTitle>•	实验活动：</SectionTitle>
                    <Content>o	编写并运行简单的算术程序</Content>
                    <Content>o	练习变量、数据类型和控制结构相关问题</Content>
                <SectionTitle>•	作业：</SectionTitle>
                    <Content>o	编写一个程序来检查一个数是否为质数</Content>

            <List>第2周：数组和基本数据结构 </List>
                <SectionTitle>•	讲座主题：</SectionTitle>
                    <Content>o	数组介绍</Content>
                    <Content>o	列表操作</Content>
                    <Content>o	元组及其用途</Content>
                    <Content>o	基本数组操作</Content>
                <SectionTitle>•	实验活动：</SectionTitle>
                    <Content>o	实现基本的数组操作</Content>
                    <Content>o	解决涉及数组的问题</Content>
                <SectionTitle>•	作业：</SectionTitle>
                    <Content>o	编写一个程序来反转一个数组</Content>
                    <Content>o	实现一个程序找到数组中的最大和最小元素</Content>

            <List>第3周：搜索算法 </List>
                <SectionTitle>•	讲座主题：</SectionTitle>
                    <Content>o	搜索算法介绍</Content>
                    <Content>o	线性搜索：概念和实现</Content>
                    <Content>o	二分搜索：概念、实现和前提条件</Content>

                <SectionTitle>•	实验活动：</SectionTitle>
                    <Content>o	实现线性搜索</Content>
                    <Content>o	实现二分搜索</Content>

                <SectionTitle>•	作业：</SectionTitle>
                    <Content>o	编写一个程序，使用线性搜索在列表中搜索一个数</Content>
                    <Content>o	编写一个程序，使用二分搜索在有序列表中搜索一个数</Content>


            <List>第4周：排序算法（第一部分）</List>
                <SectionTitle>• 讲座主题：</SectionTitle>
                    <Content>o 排序算法介绍</Content>
                    <Content>o 冒泡排序 (Bubble Sort)：概念和实现 </Content>
                    <Content>o 插入排序 (Insertion Sort)：概念和实现 </Content>

                <SectionTitle>• 实验活动：</SectionTitle>
                    <Content>o 实现冒泡排序</Content>
                    <Content>o 实现插入排序</Content>

                <SectionTitle>• 作业：</SectionTitle>
                    <Content>o 编写一个程序，使用冒泡排序对数组进行排序</Content>
                    <Content>o 编写一个程序，使用插入排序对数组进行排序</Content>

            <List>第5周：排序算法（第二部分）</List>
                <SectionTitle>• 讲座主题：</SectionTitle>
                    <Content>o 选择排序 (Selection Sort)：概念和实现</Content>
                    <Content>o 不同排序算法的比较</Content>
                    <Content>o 时间和空间复杂度</Content>

                <SectionTitle>• 实验活动：</SectionTitle>
                    <Content>o 实现选择排序</Content>
                    <Content>o 用不同的数据集比较排序算法</Content>

                <SectionTitle>• 作业：</SectionTitle>
                    <Content>o 编写一个程序，使用选择排序对数组进行排序</Content>
                    <Content>o 分析和比较冒泡排序、插入排序和选择排序的性能</Content>

            <List>第6周：映射或字典 Maps/Dictionaries </List>
                <SectionTitle>• 讲座主题：</SectionTitle>
                    <Content>o 映射或字典介绍</Content>
                    <Content>o 字典操作（添加、删除、搜索）</Content>

                <SectionTitle>• 实验活动：</SectionTitle>
                    <Content>o 实现基本的映射/字典操作</Content>
                    <Content>o 用字典解决搜索和更新问题</Content>

                <SectionTitle>• 作业：</SectionTitle>
                    <Content>o 编写一个程序，使用映射/字典计算列表中元素的频率</Content>
                    <Content>o 实现一个简单的电话簿，使用映射/字典</Content>

            <List>第7周：图论入门</List>
                <SectionTitle>• 讲座主题：</SectionTitle>
                    <Content>o 图论基础</Content>
                    <Content>o 用邻接表和邻接矩阵表示图</Content>
                    <Content>o 广度优先搜索（BFS）：概念和实现</Content>

                <SectionTitle>• 实验活动：</SectionTitle>
                    <Content>o 实现图的表示和广度优先搜索</Content>
                    <Content>o 实现广度优先搜索</Content>

                <SectionTitle>• 作业：</SectionTitle>
                    <Content>o 编写一个程序，用邻接表表示图并执行BFS</Content>
                    <Content>o 用BFS解决图的连通性问题</Content>

            <List>第8周：图算法</List>
                <SectionTitle>• 讲座主题：</SectionTitle>
                    <Content>o 深度优先搜索（DFS）：概念和实现</Content>
                    <Content>o 图的连通性和连通分量</Content>
                    <Content>o 图算法的实际应用</Content>

                <SectionTitle>• 实验活动：</SectionTitle>
                    <Content>o 实现深度优先搜索</Content>
                    <Content>o 找到图中的连通分量</Content>

                <SectionTitle>• 作业：</SectionTitle>
                    <Content>o 编写一个程序，在图上执行DFS</Content>
                    <Content>o 编写一个程序，找到图中所有的连通分量</Content>
        </Wrapper>

    )


}