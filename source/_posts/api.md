---
title: 使用FastAPI快速构建一个RestAPI
date: 2021-06-26 21:43
description: FastAPI真的太香了
tags: 
    - Python
    - RestAPI
---

# [FastAPI] (https://fastapi.tiangolo.com/zh/)  
<div class="warning">

> 在使用前请熟读文档owo

</div>

## FastAPI 是一个用于构建 API 的现代、快速（高性能）的 web 框架，使用 Python 3.6+ 并基于标准的 Python 类型提示。  
## FastAPI 基于Pydantic,使用类型提示，减少大量用户代码  
  
# Yinglish  
## 是淫语翻译机！ 能把中文翻译成淫语的翻译机！  [莉沫酱](https://hub.fastgit.org/RimoChan?tab=repositories)太强了  

# 环境  
```bash
pip install fastapi
pip install git+https://github.com/RimoChan/yinglish.git
```

# 正文  
## 制作类型  
```python
    from pydantic import BaseModel
    # 首先你需要从pydantic引入BaseModel
    class YingYu(BaseModel):

        origin: str
        degree: int
        
    # 抽象一个类并继承BaseModel
```

到此类型制作完成  
## 实例化app
```python
    from fastapi import FastAPI

    app = FastAPI()
```

## 路由
```python
    # 记得在开头 from yinglish import chs2yin
    @app.post("/api")
    async def _(yingyu: YingYu):
        origin_content = yingyu.origin
        se_degree = yingyu.degree
        result = chs2yin(origin_content, se_degree)
        return result
```

# 最终代码  
```python
    from pydantic import BaseModel
    from fastapi import FastAPI
    from pydantic import BaseModel
    from yinglish import chs2yin
    # 首先你需要从pydantic引入BaseModel

    class YingYu(BaseModel):

        origin: str
        degree: int
        
    app = FastAPI()

    @app.post("/api")
    async def _(yingyu: YingYu):
        origin_content = yingyu.origin
        se_degree = yingyu.degree
        result = chs2yin(origin_content, se_degree)
        return result
```

# 运行这段代码！  
首先，你得装个WSGI Server  
```bash
pip install uvicorn
```

然后 使用  
uvicorn {文件名}:app --reload
或者  
python -m uvicorn {文件名}:app --reload  
然后访问uvicorn给你的链接/docs，根据文档使用  
![效果图](/images/api.png)  
# 到此结束