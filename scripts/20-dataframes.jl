# # DataFrames

# Julia has a general representation for `Tables` with different implementations. The most
# used package is [DataFrames.jl](https://dataframes.juliadata.org/). It takes advantage
# of Julia syntax to define certain operation.

# ## Define a DataFrame

using DataFrames

n = 100
data = DataFrame(id = 1:n, x = rand(n), y = randn(n))

# ## Subsetting

# Let's select a column without doing a copy:

data.id
#-
data[!, :id]

# Modifications on these columns will be reflected in the original data.

xaux = data.x
#-
xaux[1] = 100
#-
first(data, 2)

# A copy of a column is created as folows:

xaux = data[:, :x]
#-
xaux[1] = 10
#-
first(data, 2)

# More specific subsetting can be done with:

#-
data.id[1:10]
#-
data.id[90:end]
#-
data[1:10, 1:2]

# You can also create a view that references to you DataFrame:

subdata = view(data, 1:10, 1:3)
subdata.x[1] = rand()
first(data, 2)

# ## Transform variables

# To perform operations over columns, we use the `Pair` syntax:

transform(data, :x => (z -> z .^ 2))
#-
typeof(:x => (z -> z .^ 2))

# We can explicitly provide the output name:

transform(data, :x => (z -> z .^ 2) => :x2)

# We can also vectorize any function with `ByRow`:

transform(data, :x => ByRow(sqrt))

# Notice that the previous operations did not modify the original dataset. You can modify
# your original dataset using the in-place function `transform!`:

transform!(data, :x => (z -> z .^ 2) => :x2)
#-
data

# The function `select` works in a similar way, but only includes the desired variables:

select(data, :x => (z -> z .^ 2) => :x2)
#-
select(data, :x, :y)
#-
typeof(r"^x")
#-
select(data, r"^x")

# Let's add new columns:

insertcols!(data, :z => rand(100))
#-
first(data, 5)

# Let's remove columns:

select!(data, Not(:x2))
#-
first(data, 5)

# Another simple operation is to rename columns:

rename(data, :x => :xnew, :z => :znew)
#-
rename(data, [:x, :z] .=> [:xnew, :znew])
#-
rename(var -> var * "_new", data)

# Remember to use `rename!` to actually make the changes on the original dataset.
