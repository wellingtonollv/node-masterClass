// @desc  get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success:true,
        message:'Show all bootcamps',
        hello: req.hello
    })
}

// @desc  get single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success:true,
        message:`show bootcamp ${req.params.id}`
    })
}

// @desc  create new bootcamp
// @route POST /api/v1/bootcamps
// @access Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({
        success:true,
        message:'create new bootcamp'
    })
}

// @desc  update bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({
        success:true,
        message:`update bootcamp ${req.params.id}`
    })
}

// @desc  delete bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        success:true,
        message:`delete bootcamp ${req.params.id}`
    })
}