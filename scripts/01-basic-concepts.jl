# ## Basic concepts
#
# - **Values**: Julia can work with different type of values like numbers, characters,
# strings, so on. Below, we see an example of an string value and a numeric value.

"Hello"
#-
2021

# - **Variables**: A value can be assigned to a variable. Below, the variable `greet` is
# defined with the assigned value `"Hello"`.

greet = "Hello"

# - **Functions**: To define a function, we start with the `function` key followed by the
# name of the function with braces, and it finish with the `end` key. The output value can
# be explicitly defined using the `return` key. See an example below.

function greet_name(x)
    out = "Hello, "  * x
    return out
end
#-
greet_name("Julia")

# - **Printing**: The most common function to print a text is `print`, while `println` has
# the same behaviour but adds a newline at the end. We can use `$` to interpolate the
# value of a variable. You can use braces for expressions (e.g. `$(1 + 1)`). In the
# example below, variables `who` and `greet` are interpolated in the printed text.

who = "Erick"
greet = "Hello"
println("Welcome! $greet, $(who)!")
