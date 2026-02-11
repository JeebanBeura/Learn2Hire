export const restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: 'User not authenticated' });
        }
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: 'You do not have permission to perform this action'
            });
        }
        next();
    };
};

export const hasPermission = (requiredPermission) => {
    return (req, res, next) => {
        if (!req.user || !req.user.permissions.includes(requiredPermission)) {
            return res.status(403).json({ message: 'Permission denied' });
        }
        next();
    };
};
