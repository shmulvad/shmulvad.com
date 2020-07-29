---
title: 'New personal website'
author: 'Søren Mulvad'
date: '2020-07-29'
heroImg: '/images/posts/new-personal/new.jpeg'
categories: ['Tech']
short: 'I have built a new personal website!'
summary: '
I have built a new personal website! In this post I will describe how I did it.
And this summary is taking up a good amount of text. At least way too much to
look nicely in the header. This is a semi-long summary now. Okay, this should be
enough.
'
---

This is just a sample blog post. The blog post is written in **Markdown**. The following should be _italic_.

Hopefully we can also have lists:

- **Item 1**: Some important text
- **Item 2**: Some other important text

Here is some JS code:

```javascript
const myGlobalVar = 5;
const mySecondGlobalVar = 10;

const func = localVar => {
  return localVar + myGlobalVar + mySecondGlobalVar;
}

console.log(func(10)); // 25
```

This is Python code:

```python
my_global_var = 5
my_second_global_var = 10
a_list = [1, 2, 3, 4, 5]

def print_list_multiple_times(lst, times):
    for _ in range(times):
        print(lst)

print_list_multiple_times([val**2 for val in a_list], 2)
# [2, 4, 9, 16, 25]
# [2, 4, 9, 16, 25]
```

Here is some inline $\KaTeX$ math, $a^2 + b^2 = c^2$, and here is some math on its own block:

$$
x = \frac{b^2 \pm \sqrt{d}}{2a}
$$

This is the end of the post.
