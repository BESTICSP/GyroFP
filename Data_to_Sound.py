#!/usr/bin/python 
#!coding:utf-8
# authou: HL time: 2021-05-19
import numpy as np
import wave
import os
from tkinter import *  # 通过from导入tkinter  后面的*表示将tkinter所有的函数导入该项目
from tkinter import filedialog
import pandas as pd
import struct
def get_directory_path():#定义函数，用来对点击上面的按钮做出反应
    global file_path
    #file_path = filedialog.askopenfilename()#获取文件路径
    file_path = filedialog.askdirectory()#获取文件夹路径
######函数1：获取路径下所有.txt文件####
def txt_file_list(file_path):
    global txt_files
    txt_files=[]
    for i in os.listdir(file_path):
        if i[-4:]=='.txt':
            txt_files.append(i)
    return txt_files
#os.listdir(dir_path)获取路径下所有文件的名称
######函数2：处理txt数据####
def txt_file_list_data(txt_files_path):
    global Amplit,Fs
    data = pd.read_csv(txt_files_path, header=None)
    time=data[0]
    Amplit=data[1]
    Fs=1/(time[len(time)-1]/len(time))
    return Amplit,Fs
######函数3：生成音频wav文件####
def create_wav_function(Amplit,Fs):
    f = wave.open(name + '.wav', mode='wb')
    f.setnchannels(1)
    # 音频通道的数量（1对于单声道，2对于立体声）
    f.setsampwidth(2)
    # 以字节为单位返回样本宽度
    f.setframerate(Fs)
    # 采样频率。
    f.setnframes(len(Amplit))
    # 数据长度，即音频帧数。
    f.setcomptype('NONE', 'not compressed')
    # wav文件被写为16位短整数，如果写一个浮点数，他将无法正确表示。为了解决这个问题，必须将浮点数转换为固定值。其中一种方法是将其乘以固定常数。带符号的16位数字最大主为2^15-1为32767。所以我们要全音阶音频，我们将数据与32767相乘。
    # 我们的数据大多数是浮点状态，当我们写入文件时这将无法工作，原因是wave模块需要处理整数，在wave文件，数据被写为16位短整数。
    # 我们将浮点数转换为整型。一种方法是将其乘以固定常数， 我们如何计算这个常数？
    # 带符号的16位数的最大值是32767（2 ^ 15-1）。 （因为最左边的位是为符号保留的）。
    # 所以，如果我们想要全音阶音频，我们将它与32767相乘。想要的音频信号是满量程的一半，使用16000的幅度。
    # 这里，我们想最终获得满量程的音频：step1. wave幅值归一化;step2.幅值乘以32767然后取整。
    waveData = Amplit * 32767 / (max(abs(Amplit)))
    waveData=waveData.astype(np.short)
    #waveData=struct.pack('h',waveData)
    #print(waveData)
    for k in waveData:
    #    print(struct.pack('h',k))
        f.writeframesraw(struct.pack('h',k))
    f.close()
    #关闭文件流wave。
###################################################################
############main function##########################################
def main_run_file():
    global file_path, txt_files,txt_files_path,name
    txt_file_list(file_path)
    for name in txt_files:
        txt_files_path=file_path+'/'+name
        txt_file_list_data(txt_files_path)
        create_wav_function(Amplit, Fs)
        print('finished')
tk = Tk()  # 使用tkinter，需要有一个窗口,定义一个窗口
canvas = Canvas(tk, width=300, height=80)  # Canvas是画布,画布仍然是在窗口tk里面,设置画布的大小，像素单位
canvas.pack()  # pack（）是用来管理和显示组件的
tk.title("数据转音频程序")  # 标题
label = Label(tk,
                  text='程序说明：\n将时域数据转换成wav音频文件\n\n注：时域数据格式：两列数据，\n第一列为时间，第二列为信号，中间以逗号或空格间隔\n\n20210522 by HL\n\n',
                  justify='left')
label.pack(side=TOP, expand=YES, fill=BOTH)
btn=Button(tk,text='选择文件夹',command=get_directory_path)#按钮,点击按钮后，调用上面定义的get_File_path函数模块
btn.pack(side=LEFT,expand=YES,fill=BOTH)#显示上面建立的button，此时按钮可以显示出来，可以点击并运行
btn_run=Button(tk,text='运行',command=main_run_file)
btn_run.pack(side=RIGHT,expand=YES,fill=BOTH)
tk.mainloop()#主循环