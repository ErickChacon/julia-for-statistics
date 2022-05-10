var documenterSearchIndex = {"docs":
[{"location":"01-basic-concepts/","page":"-","title":"-","text":"EditURL = \"<unknown>/scripts/01-basic-concepts.jl\"","category":"page"},{"location":"01-basic-concepts/#Basic-concepts","page":"-","title":"Basic concepts","text":"","category":"section"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"Values: Julia can work with different type of values like numbers, characters,","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"strings, so on. Below, we see an example of an string, numeric and complex value.","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"\"Hello\"","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"\"Hello\"","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"2021","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"2021","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"2 + 1im","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"2 + 1im","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"Variables: A value can be assigned to a variable using the equality symbol =.","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"Below, the variable greet is defined with the assigned value \"Hello\".","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"greet = \"Hello\"","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"\"Hello\"","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"Functions: A function is a mapping from a set of argument values to a return","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"value. There are different ways for defining a function. One common way is to start with the function key followed by the name of the function with braces, and it finish with the end key. The output value can be explicitly defined using the return key. See an example below.","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"function greet_name(x)\n    out = \"Hello, \"  * x\n    return out\nend","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"greet_name (generic function with 1 method)","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"greet_name(\"Julia\")","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"\"Hello, Julia\"","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"Printing: The most common function to print a text is print, while println has","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"the same behaviour but adds a newline at the end. We can use $ to interpolate the value of a variable. You can use braces for expressions (e.g. $(1 + 1)). In the example below, variables who and greet are interpolated in the printed text.","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"who = \"Erick\"\ngreet = \"Hello\"\nprintln(\"Welcome! $greet, $(who)!\")","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"Welcome! Hello, Erick!\n","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"","category":"page"},{"location":"01-basic-concepts/","page":"-","title":"-","text":"This page was generated using Literate.jl.","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"EditURL = \"<unknown>/scripts/02-common-values.jl\"","category":"page"},{"location":"02-common-values/#Common-values","page":"-","title":"Common values","text":"","category":"section"},{"location":"02-common-values/","page":"-","title":"-","text":"In this section, we provide a quick introduction to common basic objects. The function typeof used below returns the type of object provided as argument.","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Logical","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"true","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"true","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"false","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"false","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"typeof(true)","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Bool","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Integers","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"1","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"1","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"typeof(1)","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Int64","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Floating-Point numbers","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"10.0","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"10.0","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"typeof(10.0)","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Float64","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Complex numbers","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"1 + 2im","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"1 + 2im","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"typeof(1 + 2im)","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Complex{Int64}","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Rational numbers","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"10 // 15","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"2//3","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"typeof(10 // 15)","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Rational{Int64}","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Character","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"'x'","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"'x': ASCII/Unicode U+0078 (category Ll: Letter, lowercase)","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"typeof('x')","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Char","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"typeof('β')","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Char","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Strings","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"\"julia\"","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"\"julia\"","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"typeof(\"julia\")","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"String","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Symbol","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":":name","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":":name","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"typeof(:name)","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Symbol","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Tuples: unmutable fixed-length container holding any values","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"(\"John\", 29, 10.0)","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"(\"John\", 29, 10.0)","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"typeof((\"John\", 29, 10.0))","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Tuple{String, Int64, Float64}","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Named tuples: Tuples with element names","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"(name = \"John\", age = 29, value = 10.0)","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"(name = \"John\", age = 29, value = 10.0)","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"typeof((name = \"John\", age = 29, value = 10.0))","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"NamedTuple{(:name, :age, :value), Tuple{String, Int64, Float64}}","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Dictionaries:","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Dict(\"Poisson\" => 1, \"Gaussian\" => 2)","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"Dict{String, Int64} with 2 entries:\n  \"Gaussian\" => 2\n  \"Poisson\" => 1","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"","category":"page"},{"location":"02-common-values/","page":"-","title":"-","text":"This page was generated using Literate.jl.","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"EditURL = \"<unknown>/scripts/04-variables.jl\"","category":"page"},{"location":"04-variables/#Variables","page":"-","title":"Variables","text":"","category":"section"},{"location":"04-variables/","page":"-","title":"-","text":"A variable is a name that will be associated to a value through a memory space; these are case-sensitive.","category":"page"},{"location":"04-variables/#Defining-variables","page":"-","title":"Defining variables","text":"","category":"section"},{"location":"04-variables/","page":"-","title":"-","text":"Variables are defined and modified using =, see some examples below.","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"x = 10\nprint(x, \", \", typeof(x))","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"10, Int64","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"x = 10.0\nprint(x, \", \",  typeof(x))","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"10.0, Float64","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"x = \"Hello World!\"\nprint(x, \", \",  typeof(x))","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"Hello World!, String","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"x = 1 + 2im\nprint(x, \", \",  typeof(x))","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"1 + 2im, Complex{Int64}","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"x = 1 // 2\nprint(x, \", \",  typeof(x))","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"1//2, Rational{Int64}","category":"page"},{"location":"04-variables/#Define-more-than-one-variable","page":"-","title":"Define more than one variable","text":"","category":"section"},{"location":"04-variables/","page":"-","title":"-","text":"More that one variable can be defined using tuples syntax.","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"(a, b) = (1, 10)\nprint(a, \", \", b)","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"1, 10","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"a, b = 1, 10\nprint(a, \", \", b)","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"1, 10","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"(a, b) = 1, 10\nprint(a, \", \", b)","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"1, 10","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"a, b = (1, 10)\nprint(a, \", \", b)","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"1, 10","category":"page"},{"location":"04-variables/#Allowed-variable-names","page":"-","title":"Allowed variable names","text":"","category":"section"},{"location":"04-variables/","page":"-","title":"-","text":"Unicode names can be used. This helps to write code closer to mathematical equations.","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"μ = 0\nprint(μ)","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"0","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"σ = 1\nprint(σ)","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"1","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"α = 0.1\nprint(α)","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"0.1","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"β = 10.0\nprint(β)","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"10.0","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"Built-in constants or functions cannot be replaced after being used.","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"pi; pi = 3\n# ERROR: cannot assign a value to variable MathConstants.pi from module Main\n# Stacktrace:\n#  [1] top-level scope at REPL[95]:1","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"sqrt(4); sqrt = 4\n# ERROR: cannot assign a value to variable Base.sqrt from module Main\n# Stacktrace:\n#  [1] top-level scope at REPL[97]:1","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"Built-in keywords cannot be modify.","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"else = false\n# ERROR: syntax: unexpected \"else\"\n# Stacktrace:\n#  [1] top-level scope at none:1","category":"page"},{"location":"04-variables/#Some-Julia-naming-conventions","page":"-","title":"Some Julia naming conventions","text":"","category":"section"},{"location":"04-variables/","page":"-","title":"-","text":"Use lower case for variables, functions, and macros (e.g. name = \"Julia\").\nUnderscore (_) use is discouraged (e.g. lastname = \"Montalvan\").\nUse uper camel case for Types and Modules.\nUse ! at the end of a function name when it mutates its arguments.","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"","category":"page"},{"location":"04-variables/","page":"-","title":"-","text":"This page was generated using Literate.jl.","category":"page"},{"location":"00-get-started/","page":"Introduction to the Julia programming language","title":"Introduction to the Julia programming language","text":"EditURL = \"<unknown>/scripts/00-get-started.jl\"","category":"page"},{"location":"00-get-started/#Introduction-to-the-Julia-programming-language","page":"Introduction to the Julia programming language","title":"Introduction to the Julia programming language","text":"","category":"section"},{"location":"00-get-started/","page":"Introduction to the Julia programming language","title":"Introduction to the Julia programming language","text":"In this tutorial we will cover the basic elements of Julia. For more detailed information, you can check the official Julia documentation.","category":"page"},{"location":"00-get-started/#Get-started","page":"Introduction to the Julia programming language","title":"Get started","text":"","category":"section"},{"location":"00-get-started/","page":"Introduction to the Julia programming language","title":"Introduction to the Julia programming language","text":"The three main ways of using Julia are by writing commands directly in an interactive session, working with scripts, and working with notebooks. These are described below.","category":"page"},{"location":"00-get-started/#An-interactive-session","page":"Introduction to the Julia programming language","title":"An interactive session","text":"","category":"section"},{"location":"00-get-started/","page":"Introduction to the Julia programming language","title":"Introduction to the Julia programming language","text":"You can start using Julia on an interactive session by running julia from the command line. Once it is opened, you can execute Julia commands:","category":"page"},{"location":"00-get-started/","page":"Introduction to the Julia programming language","title":"Introduction to the Julia programming language","text":"10 ^ 2","category":"page"},{"location":"00-get-started/","page":"Introduction to the Julia programming language","title":"Introduction to the Julia programming language","text":"The session can be closed using CTRL-D or typing exit() inside Julia session.","category":"page"},{"location":"00-get-started/#Scripts","page":"Introduction to the Julia programming language","title":"Scripts","text":"","category":"section"},{"location":"00-get-started/","page":"Introduction to the Julia programming language","title":"Introduction to the Julia programming language","text":"Julia scripts have extension *.jl. An script is just a file containing Julia commands. The script src/00-file.jl has the following commands:","category":"page"},{"location":"00-get-started/","page":"Introduction to the Julia programming language","title":"Introduction to the Julia programming language","text":"x = [1, 3]\nfor i in x\n    println(i)\nend","category":"page"},{"location":"00-get-started/","page":"Introduction to the Julia programming language","title":"Introduction to the Julia programming language","text":"We can evaluate this script using the function include.","category":"page"},{"location":"00-get-started/","page":"Introduction to the Julia programming language","title":"Introduction to the Julia programming language","text":"include(\"src/00-file.jl\")","category":"page"},{"location":"00-get-started/","page":"Introduction to the Julia programming language","title":"Introduction to the Julia programming language","text":"A custom script with optional arguments can also be evaluated non-interactively (on a terminal) providing the script name as a first argument to the julia command.","category":"page"},{"location":"00-get-started/","page":"Introduction to the Julia programming language","title":"Introduction to the Julia programming language","text":"julia script.jl arg1 arg2","category":"page"},{"location":"00-get-started/","page":"Introduction to the Julia programming language","title":"Introduction to the Julia programming language","text":"Note that the script name is passed to the global variable PROGRAM_FILE. Similarly, the arguments are passed to ARGS.","category":"page"},{"location":"00-get-started/","page":"Introduction to the Julia programming language","title":"Introduction to the Julia programming language","text":"As an example the script src/00-script.jl prints the filename and the arguments provided.","category":"page"},{"location":"00-get-started/","page":"Introduction to the Julia programming language","title":"Introduction to the Julia programming language","text":"println(PROGRAM_FILE)\nfor x in ARGS\n    println(x)\nend","category":"page"},{"location":"00-get-started/","page":"Introduction to the Julia programming language","title":"Introduction to the Julia programming language","text":"We can execute it as follows:","category":"page"},{"location":"00-get-started/","page":"Introduction to the Julia programming language","title":"Introduction to the Julia programming language","text":"julia src/00-script.jl 1 10 100","category":"page"},{"location":"00-get-started/#Notebooks","page":"Introduction to the Julia programming language","title":"Notebooks","text":"","category":"section"},{"location":"00-get-started/","page":"Introduction to the Julia programming language","title":"Introduction to the Julia programming language","text":"Notebooks are an interactive way to execute code, but also add formated markdown text. You are probably looking at this file as a notebook. In this course, we will mainly use notebooks given that it is easier for students to start up.","category":"page"},{"location":"00-get-started/","page":"Introduction to the Julia programming language","title":"Introduction to the Julia programming language","text":"","category":"page"},{"location":"00-get-started/","page":"Introduction to the Julia programming language","title":"Introduction to the Julia programming language","text":"This page was generated using Literate.jl.","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"EditURL = \"<unknown>/scripts/06-functions.jl\"","category":"page"},{"location":"06-functions/#Functions","page":"-","title":"Functions","text":"","category":"section"},{"location":"06-functions/","page":"-","title":"-","text":"A function is an object mapping a tuple of arguments to a return value.","category":"page"},{"location":"06-functions/#Basic-syntax","page":"-","title":"Basic syntax","text":"","category":"section"},{"location":"06-functions/","page":"-","title":"-","text":"A standard way of defining a function in julia is using a block with definition, body and return value.","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"function f(x, y)\n    z = x + y\n    return z\nend\nf(1, 3)","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"4","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"When return is omited, the return value is the last evaluated expression.","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"function f(x, y)\n  x + y\nend\nf(1, 3)","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"4","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"There is also an alternative syntax to define short functions that is quite similar to the definition of functions in mathematics.","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"f(x, y) = x + y\nf(1, 3)","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"4","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"It is possible to use unicode names.","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"ρ(x, y) = x + y\nρ(1, 3)","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"4","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"Anonymous functions can also be defined using the syntax x -> x ^ 2, meaning that the function takes x and convert this to x ^ 2. This type of function is useful for functional programming. For example, to apply a particular function to a set of values using the map function.","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"map(x -> 2x - 1, [1, 3, -1])","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"3-element Vector{Int64}:\n  1\n  5\n -3","category":"page"},{"location":"06-functions/#Return","page":"-","title":"Return","text":"","category":"section"},{"location":"06-functions/","page":"-","title":"-","text":"We can define the output type of the function","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"function g(x, y)::Int8\n    return x * y\nend\ntypeof(g(3, 2))","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"Int8","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"It is a convention to return nothing when the function does not need to return a value.","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"function printx(x)\n    println(\"x = $x\")\n    return nothing\nend\nprintx(10.0)","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"x = 10.0\n","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"Multiple values can be returned using tuple's syntax.","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"function maxmin(x, y)\n    return max(x, y), min(x, y)\nend","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"maxmin (generic function with 1 method)","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"maxmin(2, 3.0)","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"(3.0, 2.0)","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"typeof(maxmin(2, 3.0))","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"Tuple{Float64, Float64}","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"a, b = maxmin(2, 3.0)","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"(3.0, 2.0)","category":"page"},{"location":"06-functions/#Multiple-dispatching","page":"-","title":"Multiple dispatching","text":"","category":"section"},{"location":"06-functions/","page":"-","title":"-","text":"A main feature of julia is multiple dispatching, meaning that it accepts multiple definitions of a function with different number of arguments, or different argument types. Then, the method called for evaluation will depend on the types of the arguments.","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"function concatenate(x::Int, y::String)\n    println(\"$x is an integer and $y is an string.\")\nend\nconcatenate(1, \"hola\")","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"1 is an integer and hola is an string.\n","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"function concatenate(x::String, y::String)\n    x * y\nend\nconcatenate(\"Hola\", \"Erick\")","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"\"HolaErick\"","category":"page"},{"location":"06-functions/#Keyword-arguments","page":"-","title":"Keyword arguments","text":"","category":"section"},{"location":"06-functions/","page":"-","title":"-","text":"Given that julia functions works with multiple dispatching, the order of the arguments is important. In situations where we need several arguments, it might become complicated to remember the order. For those cases, we can use keyword arguments such us the name of the argument is followed by the value. These keyword arguments can be included after the arguments using a ; as separation.","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"function myplot(x, y; color = \"black\", linewidth = 2)\n    #\nend\nmyplot(x, y; color = \"red\")","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"Functions with an indefinite number of keyword arguments can also be defined.","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"function myplot(x, y; kwargs...)\n    plot(x, y; kwargs...)\nend\nmyplot(x, y; color = \"red\")","category":"page"},{"location":"06-functions/#Varargs-functions","page":"-","title":"Varargs functions","text":"","category":"section"},{"location":"06-functions/","page":"-","title":"-","text":"Functions with a variable number of arguments.","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"function bar(a, b, x...)\n    a, b, x\nend\nbar(1, 2)","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"(1, 2, ())","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"bar(1, 2, 3)","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"(1, 2, (3,))","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"bar(1, 2, 3, 4)","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"(1, 2, (3, 4))","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"A similar syntax can be used to splat the values of a collection.","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"extra = (3, 4)\nbar(1, 2, extra...)","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"(1, 2, (3, 4))","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"x = [3, 4]\nbar(1, 2, x...)","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"(1, 2, (3, 4))","category":"page"},{"location":"06-functions/#Function-composition-and-piping","page":"-","title":"Function composition and piping","text":"","category":"section"},{"location":"06-functions/","page":"-","title":"-","text":"Julia can combine functions by composing with the operator ∘.","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"sqrt(+(3, 6))","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"3.0","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"(sqrt ∘ +)(3, 6)","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"3.0","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"In the following example we create a function that reverse an \"string\", then obtain the first letter, and finally convert it to capital.","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"lastletter = uppercase ∘ first ∘ reverse\nlastletter(\"julia\")","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"'A': ASCII/Unicode U+0041 (category Lu: Letter, uppercase)","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"map(uppercase ∘ first ∘ reverse, (\"this\", \"is\", \"julia\"))","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"('S', 'S', 'A')","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"On the other hand, the pipe operator |> can be used to use the output of a function as the input of another function.","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"(3, 6) |>\n    sum |>\n    sqrt","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"3.0","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"","category":"page"},{"location":"06-functions/","page":"-","title":"-","text":"This page was generated using Literate.jl.","category":"page"},{"location":"#Julia-Tutorial","page":"Julia Tutorial","title":"Julia Tutorial","text":"","category":"section"}]
}
